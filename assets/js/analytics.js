/*
 * Custom Google Analytics events. Invisible: it only listens, never changes the page.
 * If gtag is blocked or anything here fails, the site keeps working exactly the same.
 *
 * Every event carries two parameters, registered in GA as event-scoped custom dimensions:
 *   target  what was used     (project id, contact method, section, language)
 *   detail  how / where       (link type, video progress, page area)
 *
 *   project_click   target=<project id>   detail=video | demo | report | repo | site
 *   video_milestone  target=<project id>   detail=start | 25 | 50 | 75 | 100
 *   contact_click   target=email | copy_email | linkedin | github | daia | cv   detail=<section>
 *   section_view    target=<section>      (once per visit and section)
 *   language_change target=<new language>
 *   more_projects   target=open
 */
(function () {
  "use strict";

  try {
    var DATA = window.PORTFOLIO_DATA;
    if (!DATA) return;

    function send(name, target, detail) {
      try {
        if (typeof window.gtag !== "function") return;
        var params = { target: String(target) };
        if (detail !== undefined) params.detail = String(detail);
        window.gtag("event", name, params);
      } catch (e) {}
    }

    // Absolute URL, so "assets/x.pdf" and "https://site/assets/x.pdf" match.
    function abs(href) {
      try { return new URL(href, location.href).href; } catch (e) { return String(href); }
    }

    /* --- Which project and which link, from the URL alone --- */

    var projectLinks = {};
    var videos = {};
    function addProject(p) {
      if (p.video) videos[abs(p.video)] = p.id;
      if (p.demo) projectLinks[abs(p.demo)] = { id: p.id, kind: "demo" };
      if (p.repo) projectLinks[abs(p.repo)] = { id: p.id, kind: "repo" };
      if (p.site) projectLinks[abs(p.site)] = { id: p.id, kind: "site" };
      var r = p.report;
      (r && typeof r === "object" ? Object.keys(r).map(function (k) { return r[k]; }) : r ? [r] : [])
        .forEach(function (href) { projectLinks[abs(href)] = { id: p.id, kind: "report" }; });
    }
    if (DATA.venture) addProject(DATA.venture);
    (DATA.featured || []).concat(DATA.more || []).forEach(addProject);

    var L = DATA.links || {};
    var contacts = {};
    if (L.email) contacts[abs("mailto:" + L.email)] = "email";
    ["linkedin", "github", "daia", "cv"].forEach(function (k) {
      if (L[k]) contacts[abs(L[k])] = k;
    });

    function area(el) {
      if (el.closest(".hero")) return "hero";
      var s = el.closest("section[id]");
      return s ? s.id : "other";
    }

    /* --- Clicks (capture phase: we read the state before the page changes it) --- */

    document.addEventListener("click", function (e) {
      try {
        var el = e.target && e.target.closest ? e.target.closest("a, button") : null;
        if (!el) return;

        var video = el.getAttribute("data-video");
        if (video) {
          send("project_click", videos[abs(video)] || "other", "video");
          return;
        }

        if (el.matches(".copy-email")) return send("contact_click", "copy_email", area(el));

        if (el.matches(".lang-switch button[data-lang]")) {
          if (el.getAttribute("aria-pressed") !== "true") send("language_change", el.getAttribute("data-lang"));
          return;
        }

        if (el.matches(".more-toggle")) {
          if (el.getAttribute("aria-expanded") !== "true") send("more_projects", "open");
          return;
        }

        var href = el.getAttribute("href");
        if (!href || href.charAt(0) === "#") return;
        var url = abs(href);
        var inProject = el.closest(".card, [data-render='venture']");
        if (inProject && projectLinks[url]) {
          send("project_click", projectLinks[url].id, projectLinks[url].kind);
        } else if (contacts[url]) {
          send("contact_click", contacts[url], area(el));
        }
      } catch (err) {}
    }, true);

    /* --- Video: start and 25 / 50 / 75 / 100 %, once each per page load --- */

    var reached = {};
    function videoMark(v, mark) {
      var id = videos[abs(v.currentSrc || v.getAttribute("src") || "")] || "other";
      var key = id + ":" + mark;
      if (reached[key]) return;
      reached[key] = true;
      send("video_milestone", id, mark);
    }
    // Media events do not bubble, but they do pass through document in the capture phase.
    document.addEventListener("play", function (e) {
      try { if (e.target.tagName === "VIDEO") videoMark(e.target, "start"); } catch (err) {}
    }, true);
    document.addEventListener("timeupdate", function (e) {
      try {
        var v = e.target;
        if (v.tagName !== "VIDEO" || !v.duration) return;
        var pct = (v.currentTime / v.duration) * 100;
        [25, 50, 75].forEach(function (m) { if (pct >= m) videoMark(v, String(m)); });
      } catch (err) {}
    }, true);
    document.addEventListener("ended", function (e) {
      try { if (e.target.tagName === "VIDEO") videoMark(e.target, "100"); } catch (err) {}
    }, true);

    /* --- Sections seen (when they cross the middle of the screen) --- */

    if ("IntersectionObserver" in window) {
      var seen = {};
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var name = entry.target.id || "hero";
          observer.unobserve(entry.target);
          if (seen[name]) return;
          seen[name] = true;
          send("section_view", name);
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("main .hero, main section[id]").forEach(function (s) { observer.observe(s); });
    }
  } catch (e) {}
})();
