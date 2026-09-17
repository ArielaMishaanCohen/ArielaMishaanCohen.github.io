(function () {
  "use strict";

  var DATA = window.PORTFOLIO_DATA;
  var LOCALES = window.PORTFOLIO_I18N;
  var DEFAULT_LANG = "en";
  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lang = pickLanguage();
  var revealedOnce = false;

  /* ---------------- Utilities ---------------- */

  function storage(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  function lookup(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  // Translate with fallback to the default language, then to the key itself.
  function t(path) {
    var value = lookup(LOCALES[lang], path);
    if (value === undefined) value = lookup(LOCALES[DEFAULT_LANG], path);
    return value === undefined ? path : value;
  }

  function tag(name) {
    var value = lookup(LOCALES[lang], "tags")[name];
    if (value === undefined) value = LOCALES[DEFAULT_LANG].tags[name];
    return value || name;
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function pickLanguage() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && LOCALES[fromUrl]) return fromUrl;
    var saved = storage("lang");
    if (saved && LOCALES[saved]) return saved;
    return DEFAULT_LANG;
  }

  var ICONS = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>',
    doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
    live: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 1 0 5.25 7a1.96 1.96 0 0 0 0-3.92zM20.44 13.3c0-3.3-1.76-4.84-4.12-4.84a3.56 3.56 0 0 0-3.2 1.76V8.5H9.75V20h3.37v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l-.05-6.7z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>'
  };

  /* ---------------- Rendering ---------------- */

  function linkHtml(href, label, icon, kind) {
    var external = kind !== "local";
    var hint = kind === "pdf" ? t("ui.opensPdf") : external ? t("ui.opensNew") : "";
    return (
      '<a class="link" href="' + esc(href) + '"' +
      (external || kind === "pdf" ? ' target="_blank" rel="noopener"' : "") + ">" +
      ICONS[icon] + "<span>" + esc(label) + "</span>" +
      (hint ? '<span class="sr-only"> ' + esc(hint) + "</span>" : "") +
      "</a>"
    );
  }

  function projectLinks(p) {
    var out = [];
    if (p.demo) out.push(linkHtml(p.demo, t("ui.links.demo"), "live", "new"));
    if (p.report) out.push(linkHtml(p.report, t("ui.links.report"), "doc", "pdf"));
    if (p.repo) out.push(linkHtml(p.repo, t("ui.links.repo"), "code", "new"));
    return out.join("");
  }

  function tagsHtml(tags) {
    return '<ul class="tags">' + tags.map(function (x) {
      return '<li class="tag">' + esc(tag(x)) + "</li>";
    }).join("") + "</ul>";
  }

  function thumbHtml(p, text, eager) {
    var cls = p.fit === "cover" ? "is-cover" : "is-contain";
    return (
      '<div class="thumb ' + cls + '"' + (p.focus ? ' style="--focus:' + esc(p.focus) + '"' : "") + ">" +
      '<img src="' + esc(p.image) + '" alt="' + esc(text.alt) + '" loading="' + (eager ? "eager" : "lazy") + '" decoding="async">' +
      "</div>"
    );
  }

  function renderNow() {
    return t("hero.now").map(function (item) {
      return '<li><span class="role">' + esc(item.role) + '</span><span class="org">' + esc(item.org) + "</span></li>";
    }).join("");
  }

  function renderVenture() {
    var v = DATA.venture;
    var text = t("venture");
    return (
      '<div class="venture-body">' +
        '<div class="venture-top"><span class="pill">' + ICONS.users + esc(text.kicker) + "</span></div>" +
        "<div>" +
          '<h3 class="venture-title">' + esc(text.title) + "</h3>" +
          '<p class="venture-subtitle">' + esc(text.subtitle) + "</p>" +
        "</div>" +
        '<p class="venture-role">' + esc(text.role) + "</p>" +
        '<p class="venture-desc">' + esc(text.description) + "</p>" +
        '<div class="venture-validation"><h4>' + esc(text.validationTitle) + "</h4><ul>" +
          text.validation.map(function (x) { return "<li>" + ICONS.check + "<span>" + esc(x) + "</span></li>"; }).join("") +
        "</ul></div>" +
        '<div class="venture-foot">' +
          tagsHtml(v.tags) +
          '<div class="links">' +
            linkHtml(v.site, t("ui.links.site"), "arrow", "new") +
            '<span class="link is-muted">' + ICONS.lock + "<span>" + esc(t("ui.links.privateRepo")) + "</span></span>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="venture-visual">' +
        '<img class="venture-logo" src="' + esc(v.logo) + '" alt="DAIA" width="640" height="325">' +
        (v.video
          ? '<button class="play-btn" type="button" data-video="' + esc(v.video) + '" data-poster="' + esc(v.poster || "") + '">' +
              '<span class="play-icon">' + ICONS.play + "</span><span>" + esc(t("ui.links.watchDemo")) + "</span></button>"
          : "") +
        '<figure class="shot shot-back" aria-hidden="true"><img src="' + esc(v.shots.back) + '" alt="" loading="lazy" decoding="async"></figure>' +
        '<figure class="shot shot-main"><img src="' + esc(v.shots.main) + '" alt="' + esc(text.shotAlt) + '" loading="lazy" decoding="async"></figure>' +
      "</div>"
    );
  }

  function renderFeatured() {
    var total = DATA.featured.length;
    return DATA.featured.map(function (p, i) {
      var text = t("projects." + p.id);
      var stats = text.stats || [];
      return (
        '<li class="card" aria-roledescription="slide" aria-label="' + (i + 1) + " / " + total + '">' +
          thumbHtml(p, text, true) +
          '<div class="card-body">' +
            '<div class="card-meta"><span class="pills">' +
              (text.kind ? '<span class="pill pill-solid">' + esc(text.kind) + "</span>" : "") +
              '<span class="pill">' + ICONS.users + esc(text.team) + "</span>" +
            '</span><span class="card-index">' + pad(i + 1) + "</span></div>" +
            '<h4 class="card-title">' + esc(text.title) + "</h4>" +
            '<p class="card-desc">' + esc(text.description) + "</p>" +
            (stats.length
              ? '<dl class="stats">' + stats.map(function (s) {
                  return '<div class="stat"><dt class="sr-only">' + esc(s.label) + '</dt><dd class="stat-value" style="margin:0">' + esc(s.value) + '</dd><dd class="stat-label" style="margin:0" aria-hidden="true">' + esc(s.label) + "</dd></div>";
                }).join("") + "</dl>"
              : "") +
            '<div class="card-foot">' +
              tagsHtml(p.tags) +
              (p.nda
                ? '<span class="nda-badge">' + ICONS.lock + esc(t("ui.links.nda")) + "</span>"
                : '<div class="links">' + projectLinks(p) + "</div>") +
            "</div>" +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  function renderMore() {
    return DATA.more.map(function (p, i) {
      var text = t("projects." + p.id);
      return (
        '<li data-reveal style="--d:' + (i % 3) + '"><article class="card mini">' +
          thumbHtml(p, text) +
          '<div class="card-body">' +
            '<p class="team">' + esc(text.team) + "</p>" +
            '<h3 class="card-title">' + esc(text.title) + "</h3>" +
            '<p class="card-desc">' + esc(text.description) + "</p>" +
            '<div class="card-foot"><div class="links">' + projectLinks(p) + "</div></div>" +
          "</div>" +
        "</article></li>"
      );
    }).join("");
  }

  function renderExperience() {
    return DATA.experience.map(function (id, i) {
      var x = t("experience." + id);
      return (
        '<li data-reveal style="--d:' + i + '">' +
          '<p class="xp-dates">' + esc(x.dates) + "</p>" +
          "<div>" +
            '<h3 class="xp-role">' + esc(x.role) + "</h3>" +
            '<p class="xp-org">' + esc(x.org) + "</p>" +
          "</div>" +
          '<div class="xp-summary"><p>' + esc(x.summary) + "</p>" +
            (x.link ? '<a class="link" href="#work">' + ICONS.arrow + "<span>" + esc(x.link) + "</span></a>" : "") +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  function renderBackground() {
    var ed = t("education");
    var sk = t("skills");
    var lg = t("languages");

    var education =
      '<div class="panel" data-reveal>' +
        '<h3 class="panel-title">' + esc(ed.title) + "</h3>" +
        '<p class="edu-school">' + esc(ed.school) + "</p>" +
        '<ul class="edu-degrees">' + ed.degrees.map(function (d) {
          return '<li><span class="name">' + esc(d.name) + '</span><span class="dates">' + esc(d.dates) + "</span></li>";
        }).join("") + "</ul>" +
        '<div class="edu-extra">' +
          "<dl><dt>" + esc(ed.thesisLabel) + '</dt><dd><a class="link" href="' + esc(DATA.links.daia) + '" target="_blank" rel="noopener">' + ICONS.arrow + "<span>" + esc(ed.thesis) + " · daia.com.gt</span></a></dd></dl>" +
          "<dl><dt>" + esc(ed.honorsLabel) + "</dt><dd>" + ed.honors.map(function (h) {
            return '<span class="pill">' + esc(h) + "</span>";
          }).join("") + "</dd></dl>" +
        "</div>" +
      "</div>";

    var skills =
      '<div class="panel" data-reveal style="--d:2">' +
        '<h3 class="panel-title">' + esc(sk.title) + "</h3>" +
        Object.keys(DATA.skills).map(function (group) {
          return '<div class="skill-group"><h4>' + esc(sk.groups[group]) + "</h4>" + tagsHtml(DATA.skills[group]) + "</div>";
        }).join("") +
      "</div>";

    var languages =
      '<div class="panel" data-reveal style="--d:1">' +
        '<h3 class="panel-title">' + esc(lg.title) + "</h3>" +
        '<ul class="lang-list">' + DATA.languages.map(function (l) {
          var level = lg.levels[l.level] || l.level;
          var dots = "";
          for (var i = 0; i < 5; i++) dots += '<i class="' + (i + 1 <= l.dots ? "on" : i < l.dots ? "half" : "") + '"></i>';
          return '<li><span class="lang-name">' + esc(lg.names[l.id]) + '</span><span class="lang-level"><span class="lang-dots" aria-hidden="true">' + dots + "</span>" + esc(level) + "</span></li>";
        }).join("") + "</ul>" +
      "</div>";

    return "<div>" + education + languages + "</div>" + skills;
  }

  function renderContact() {
    var L = DATA.links;
    var items = [
      { href: "mailto:" + L.email, icon: "mail", label: t("contact.email"), extra: L.email, local: true },
      { href: L.linkedin, icon: "linkedin", label: t("contact.linkedin"), extra: "/in/ariela-mishaan" },
      { href: L.github, icon: "github", label: t("contact.github"), extra: "@ArielaMishaanCohen" },
      { href: L.daia, icon: "globe", label: t("contact.daia"), extra: "daia.com.gt" }
    ];
    return items.map(function (x) {
      return (
        '<li><a href="' + esc(x.href) + '"' + (x.local ? "" : ' target="_blank" rel="noopener"') + ">" +
          ICONS[x.icon] + "<span>" + esc(x.label) + '</span><span class="muted">' + esc(x.extra) + "</span>" +
        "</a></li>"
      );
    }).join("");
  }

  var RENDERERS = {
    now: renderNow,
    venture: renderVenture,
    featured: renderFeatured,
    more: renderMore,
    experience: renderExperience,
    background: renderBackground,
    contact: renderContact
  };

  /* ---------------- i18n ---------------- */

  function applyLanguage(next) {
    lang = next;
    var meta = LOCALES[lang].meta;
    root.lang = meta.lang;
    document.title = meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });
    document.querySelectorAll("[data-render]").forEach(function (el) {
      el.innerHTML = RENDERERS[el.getAttribute("data-render")]();
    });
    document.querySelectorAll("[data-link]").forEach(function (el) {
      el.setAttribute("href", DATA.links[el.getAttribute("data-link")]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    observeReveals();
    carousel.refresh();
  }

  function buildLanguageSwitch() {
    var wrap = document.querySelector(".lang-switch");
    wrap.innerHTML = Object.keys(LOCALES).map(function (code) {
      var m = LOCALES[code].meta;
      return '<button type="button" data-lang="' + code + '" lang="' + m.lang + '" aria-label="' + esc(m.name) + '">' + esc(m.label) + "</button>";
    }).join("");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-lang]");
      if (!btn || btn.dataset.lang === lang) return;
      storage("lang", btn.dataset.lang);
      var url = new URL(location.href);
      url.searchParams.delete("lang");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
      applyLanguage(btn.dataset.lang);
    });
  }

  /* ---------------- Theme ---------------- */

  function initTheme() {
    var btn = document.querySelector(".theme-toggle");
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || (mq.matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      // Going back to the system preference clears the override.
      if ((next === "dark") === mq.matches) {
        root.removeAttribute("data-theme");
        try { localStorage.removeItem("theme"); } catch (e) {}
      } else {
        root.setAttribute("data-theme", next);
        storage("theme", next);
      }
    });
  }

  /* ---------------- Carousel ---------------- */

  var carousel = (function () {
    var track, prev, next, current, totalEl, bar;

    function cards() {
      return track ? Array.prototype.slice.call(track.children) : [];
    }

    function step() {
      var list = cards();
      if (list.length < 2) return track.clientWidth;
      return list[1].offsetLeft - list[0].offsetLeft;
    }

    function update() {
      if (!track) return;
      var list = cards();
      var max = track.scrollWidth - track.clientWidth;
      var index = Math.round(track.scrollLeft / Math.max(step(), 1));
      if (track.scrollLeft >= max - 4) index = list.length - 1;
      index = Math.min(Math.max(index, 0), list.length - 1);

      current.textContent = pad(index + 1);
      totalEl.textContent = "/ " + pad(list.length);
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max - 4;

      var visible = Math.max(1, Math.min(list.length, Math.round(track.clientWidth / Math.max(step(), 1))));
      var widthPct = (visible / list.length) * 100;
      var progress = max > 0 ? track.scrollLeft / max : 0;
      bar.style.width = widthPct + "%";
      bar.style.transform = "translateX(" + progress * (100 / widthPct) * (100 - widthPct) + "%)";
    }

    function go(dir) {
      track.scrollBy({ left: dir * step(), behavior: reduceMotion.matches ? "auto" : "smooth" });
    }

    function init() {
      track = document.querySelector(".carousel-track");
      prev = document.querySelector('[data-carousel="prev"]');
      next = document.querySelector('[data-carousel="next"]');
      current = document.querySelector(".carousel-count .current");
      totalEl = document.querySelector(".carousel-count .total");
      bar = document.querySelector(".carousel-progress span");

      prev.addEventListener("click", function () { go(-1); });
      next.addEventListener("click", function () { go(1); });
      track.addEventListener("scroll", function () { window.requestAnimationFrame(update); }, { passive: true });
      track.addEventListener("keydown", function (e) {
        if (e.target !== track) return;
        if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      });
      // Keep a focused card fully in view when tabbing through its links.
      track.addEventListener("focusin", function (e) {
        var card = e.target.closest(".card");
        if (card && e.target !== track) {
          track.scrollTo({ left: card.offsetLeft - cards()[0].offsetLeft, behavior: reduceMotion.matches ? "auto" : "smooth" });
        }
      });
      window.addEventListener("resize", update);
    }

    return { init: init, refresh: function () { if (track) update(); } };
  })();

  /* ---------------- Reveal on scroll ---------------- */

  var revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;

  function observeReveals() {
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach(function (el) {
      // After a language switch, show re-rendered items immediately if their section is on screen.
      if (!revealObserver || reduceMotion.matches) {
        el.classList.add("is-visible");
      } else if (revealedOnce && el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      } else {
        revealObserver.observe(el);
      }
    });
    revealedOnce = true;
  }

  /* ---------------- Header, nav & misc ---------------- */

  function initHeader() {
    var header = document.querySelector(".site-header");
    var nav = document.getElementById("site-nav");
    var toggle = document.querySelector(".menu-toggle");

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Highlight the section currently in view.
    if ("IntersectionObserver" in window) {
      var links = nav.querySelectorAll("a");
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            var active = a.getAttribute("href") === "#" + entry.target.id;
            a.classList.toggle("is-active", active);
            if (active) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
    }
  }

  function toast(message) {
    var el = document.querySelector(".toast");
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { el.classList.remove("is-visible"); }, 2200);
  }

  function initCopyEmail() {
    var btn = document.querySelector(".copy-email");
    var state = btn.querySelector(".copy-email-state");
    btn.addEventListener("click", function () {
      var email = DATA.links.email;
      var done = function () {
        btn.classList.add("is-copied");
        state.textContent = t("ui.copy.done");
        toast(t("ui.copy.done"));
        setTimeout(function () {
          btn.classList.remove("is-copied");
          state.textContent = t("ui.copy.idle");
        }, 2400);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done, function () { location.href = "mailto:" + email; });
      } else {
        location.href = "mailto:" + email;
      }
    });
  }

  function initVideo() {
    var dialog = null;
    var lastTrigger = null;

    function ensureDialog() {
      if (dialog) return dialog;
      dialog = document.createElement("dialog");
      dialog.className = "video-dialog";
      dialog.innerHTML =
        '<button class="video-close" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
        '<video controls playsinline preload="none"></video>';
      document.body.appendChild(dialog);
      dialog.querySelector(".video-close").addEventListener("click", function () { dialog.close(); });
      dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
      dialog.addEventListener("close", function () {
        var v = dialog.querySelector("video");
        v.pause();
        if (lastTrigger) lastTrigger.focus();
      });
      return dialog;
    }

    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-video]");
      if (!trigger) return;
      var d = ensureDialog();
      if (typeof d.showModal !== "function") {
        window.open(trigger.dataset.video, "_blank", "noopener");
        return;
      }
      lastTrigger = trigger;
      var video = d.querySelector("video");
      var close = d.querySelector(".video-close");
      close.setAttribute("aria-label", t("ui.links.close"));
      d.setAttribute("aria-label", t("ui.links.videoTitle"));
      if (video.getAttribute("src") !== trigger.dataset.video) {
        video.setAttribute("src", trigger.dataset.video);
        if (trigger.dataset.poster) video.setAttribute("poster", trigger.dataset.poster);
      }
      video.setAttribute("aria-label", t("ui.links.videoTitle"));
      d.showModal();
      var playing = video.play();
      if (playing && playing.catch) playing.catch(function () {});
    });
  }

  /* ---------------- Boot ---------------- */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  buildLanguageSwitch();
  initTheme();
  initHeader();
  carousel.init();
  applyLanguage(lang);
  initCopyEmail();
  initVideo();
})();
