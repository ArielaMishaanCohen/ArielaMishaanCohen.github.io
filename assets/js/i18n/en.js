window.PORTFOLIO_I18N = window.PORTFOLIO_I18N || {};
window.PORTFOLIO_I18N.en = {
  meta: {
    lang: "en",
    label: "EN",
    name: "English",
    title: "Ariela Mishaan — Data Scientist",
    description:
      "Portfolio of Ariela Mishaan, data scientist working on applied machine learning, business intelligence and entrepreneurship."
  },

  ui: {
    skip: "Skip to content",
    menu: "Menu",
    language: "Language",
    theme: "Switch color theme",
    nav: {
      work: "Work",
      more: "More projects",
      experience: "Experience",
      background: "Background",
      contact: "Contact"
    },
    links: {
      report: "Report",
      repo: "Code",
      demo: "Live dashboard",
      site: "Visit daia.com.gt",
      privateRepo: "Private repository",
      watchDemo: "Watch demo",
      close: "Close video",
      videoTitle: "DAIA product demo",
      nda: "Under NDA · no public code"
    },
    moreToggle: {
      show: "Show {n} more projects",
      hide: "Show fewer"
    },
    carousel: {
      label: "Featured projects",
      prev: "Previous project",
      next: "Next project",
      hint: "Scroll or use the arrows"
    },
    copy: { idle: "Copy email", done: "Copied to clipboard" },
    opensPdf: "(PDF, opens in a new tab)",
    opensNew: "(opens in a new tab)",
    noscript: "This site needs JavaScript to display its content."
  },

  hero: {
    eyebrow: "Data Scientist",
    location: "Guatemala",
    tagline: "Applied machine learning, business intelligence & entrepreneurship.",
    intro:
      "I build machine learning models and data analytics systems. I co-founded DAIA, and I'm finishing my Engineering degree in Data Science at Universidad del Valle de Guatemala.",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
    nowLabel: "Currently",
    now: [
      { role: "Co-founder & Technical Lead", org: "DAIA" },
      { role: "Jr. Data & IT Consultant", org: "Solidaridad" },
      { role: "Data Science Engineering", org: "Universidad del Valle de Guatemala" }
    ]
  },

  sections: {
    work: {
      index: "01",
      eyebrow: "Selected work",
      title: "Projects that go from raw data to real decisions.",
      lede: "Production ML, NLP and statistical learning — plus the product I'm building."
    },
    more: {
      index: "02",
      eyebrow: "More projects",
      title: "Analysis, vision and algorithms.",
      lede: "Coursework and internship projects, with the full written report where there is one."
    },
    experience: {
      index: "03",
      eyebrow: "Experience",
      title: "Where I've worked with data.",
      lede: "The short version — the details are in my CV."
    },
    background: {
      index: "04",
      eyebrow: "Background",
      title: "Education & skills.",
      lede: ""
    }
  },

  venture: {
    kicker: "Venture · Team of 4",
    role: "Co-founder & Technical Lead — product development",
    title: "DAIA",
    subtitle: "A B2B business intelligence platform for growing businesses.",
    description:
      "A multi-tenant B2B SaaS platform: automated data pipelines, KPI dashboards and machine learning models — forecasting, anomaly detection and recommendations — delivered in a working web application.",
    validationTitle: "Validated in the field",
    validation: [
      "Market research & customer interviews",
      "Three pilots in progress",
      "First enterprise contract in progress"
    ],
    shotAlt: "DAIA KPI dashboard with automatic insights",
    shotBackAlt: "DAIA home screen with downloadable reports"
  },

  projects: {
    ojoqr: {
      kind: "Product",
      team: "Team of 2",
      title: "Ojo QR: Phishing Detection for QR Codes",
      description:
        "Web app that scans a QR code and explains in plain language whether it shows risk signals before you open it. It combines an engine of 44 explainable rules with a LightGBM model that runs on the phone (custom TreeSHAP in TypeScript), group-conditional conformal prediction to abstain when it can't decide, adversarial evaluation and weekly drift monitoring. I designed and built the whole system, from dataset to production.",
      stats: [
        { value: "0.87%", label: "false positives on unseen popular sites" },
        { value: "95.4%", label: "brand impersonations caught (2,496 synthetic)" },
        { value: "717", label: "features computed on the phone" }
      ],
      demoLabel: "Live app",
      videoTitle: "Ojo QR demo",
      alt: "Ojo QR flags a link that imitates Banco Industrial as suspicious and explains why"
    },
    factored: {
      kind: "Hackathon",
      team: "Team of 4",
      title: "AI Banking Dispute Assistant",
      description:
        "A Spanish and Portuguese assistant for bank dispute intake (Factored AI & Data Hackathon 2026). The LLM understands and writes; versioned rules decide and act. I owned the ML: an intent classifier with an abstention threshold, a Gemini cascade and evaluation against baselines.",
      stats: [
        { value: "48.5%", label: "safe auto-resolution (ceiling: 60.9%)" },
        { value: "4/68", label: "missed escalations (baseline: 17)" },
        { value: "189", label: "held-out cases (synthetic)" }
      ],
      demoLabel: "Live app",
      videoTitle: "AI banking dispute assistant demo",
      alt: "The AI flags an unrecognized charge and rule R7 blocks the card and passes the case to fraud"
    },
    gasolina: {
      kind: "MLOps",
      team: "Team of 6",
      title: "Gasolina GT: OCR Fuel Prices & Forecast",
      description:
        "Reads fuel prices from photos of Guatemalan gas pumps with OCR and predicts whether they will go up, down or stay flat next week. A medallion pipeline on Databricks orchestrated by a weekly Job with alerts, MLflow experiment tracking and CI/CD with GitHub Actions. I coordinated the team and owned data extraction and the SSH connection to the server.",
      stats: [
        { value: "91.8%", label: "prices read correctly by OCR (78/85)" },
        { value: "38", label: "real pump photos" },
        { value: "60%", label: "weekly accuracy (baseline: 50%)" }
      ],
      demoLabel: "Live app",
      videoTitle: "Gasolina GT demo",
      alt: "A gas pump photo with the prices detected by OCR and next week's prediction"
    },
    worldcup: {
      team: "Team of 2",
      title: "World Cup 2026 Prediction",
      description:
        "A statistical learning system that combines five data sources — historical matches, FIFA ratings, market valuations, World Bank indicators and official fixtures — to predict results, scores and how far each team goes.",
      stats: [
        { value: "43,364", label: "historical matches" },
        { value: "10,000", label: "Monte Carlo runs" },
        { value: "~64%", label: "match accuracy (GB)" }
      ],
      alt: "Title odds per national team from the Monte Carlo simulation"
    },
    ecobici: {
      team: "Team of 2",
      title: "ECOBICI Bike-Share Analysis",
      description:
        "A statistical study of Mexico City's bike-share system (2024–2026) using PCA, K-Means, hierarchical, GMM/EM and spectral clustering, KDE, t-SNE and regularized regression.",
      stats: [
        { value: "43.6M", label: "trips analyzed" },
        { value: "4", label: "user profiles found" }
      ],
      alt: "t-SNE projection of trips colored by K-Means cluster"
    },
    llm: {
      team: "Team of 2",
      title: "Fine-tuning LLMs for News",
      description:
        "Fine-tuned transformers for abstractive summarization (BART), sentiment classification (DistilBERT, MiniLM) and clustering (Sentence-Transformers + HDBSCAN), with explainability analysis of errors, bias and factual consistency.",
      stats: [
        { value: "3", label: "NLP tasks" },
        { value: "XAI", label: "error & bias analysis" }
      ],
      alt: "Confusion matrix of the fine-tuned MiniLM sentiment classifier"
    },
    sophos: {
      kind: "Internship",
      team: "Team of 5",
      title: "Data Science & BI at SOPHOS",
      description:
        "Predictive models for demand forecasting, recommendations, price optimization and churn, together with Streamlit dashboards and a centralized SQL metric store.",
      stats: [
        { value: "4", label: "predictive models" },
        { value: "6+", label: "dashboards" },
        { value: "30+", label: "metric store tables" }
      ],
      alt: "Sales forecast dashboard built in Streamlit (figures redacted under NDA)",
    },
    vision: {
      team: "Team of 5",
      title: "Football Event Detection",
      description: "Detects events in match video with transfer learning (EfficientNetB0) and a temporal Conv1D model.",
      alt: "Match frame labeled by the model as a play"
    },
    taxi: {
      team: "Team of 4",
      title: "NYC Taxi Fare Prediction",
      description: "Supervised regression with feature engineering; Random Forest performed best (MAE 2.20).",
      alt: "Predicted versus actual taxi fares"
    },
    othello: {
      team: "Team of 4",
      title: "Othello AI",
      description: "Alpha-Beta, Expectimax and MCTS agents with an interactive interface, compared head to head in a tournament.",
      alt: "Heatmap of positional heuristic weights on the Othello board"
    },
    mazes: {
      team: "Team of 4",
      title: "Maze Generation & Search",
      description: "Mazes generated with Kruskal and Prim, solved with BFS, DFS, Dijkstra and A* across 25 scenarios.",
      alt: "Paths found by BFS, DFS, Dijkstra and A* in a generated maze"
    },
    segmentation: {
      team: "Team of 2",
      title: "Spectral Image Segmentation",
      description: "Binary segmentation from a pixel affinity graph using the Fiedler vector of the normalized Laplacian.",
      alt: "Original images and their binary segmentation masks"
    }
  },

  experience: {
    solidaridad: {
      role: "Jr. Data & IT Consultant",
      org: "Solidaridad",
      dates: "May 2026 — Present",
      summary:
        "Data cleaning and validation, baseline ML for indicator forecasting, and Looker Studio dashboards for sustainable agriculture programs."
    },
    cnee: {
      role: "Wholesale Electricity Market Data Analyst · Intern",
      org: "CNEE",
      dates: "Jun — Dec 2025",
      summary:
        "Built 12 Tableau dashboards and automated the ingestion of high-dimensional daily logs with Perl, Python and R into a unified database."
    },
    sophos: {
      role: "Data Science & BI Intern",
      org: "SOPHOS",
      dates: "May 2025 — Jan 2026",
      summary: "Predictive models, dashboards and a SQL metric store.",
      link: "See the project"
    },
    uvg: {
      role: "Teaching Assistant",
      org: "Universidad del Valle de Guatemala",
      dates: "Jan 2024 — Present",
      summary:
        "Grade assignments and give rubric-based feedback to 30+ students per term in Real Analysis, Algorithms, Data Science and Advanced Linear Algebra. Pre-Calculus tutor in 2023."
    }
  },

  education: {
    title: "Education",
    school: "Universidad del Valle de Guatemala",
    degrees: [
      { name: "B.S. in Data Science", dates: "Jan 2022 — Jul 2026" },
      { name: "Engineering Degree in Data Science", dates: "Expected May 2027" }
    ],
    thesisLabel: "Entrepreneurial thesis",
    thesis: "DAIA",
    honorsLabel: "Honors",
    honors: ["Potencia-T Scholarship", "Academic Merit Award, 2022–2025"]
  },

  skills: {
    title: "Skills",
    groups: {
      tools: "Languages & tools",
      ml: "ML & statistics",
      bi: "BI & data engineering"
    }
  },

  languages: {
    title: "Languages",
    names: { es: "Spanish", en: "English", de: "German", fr: "French", he: "Hebrew" },
    levels: { native: "Native" }
  },

  tags: {
    timeseries: "Time-series forecasting (SARIMAX)",
    montecarlo: "Monte Carlo simulation",
    nlp: "NLP",
    recsys: "Recommender systems",
    cv: "Computer vision",
    kpi: "KPI design",
    dashboards: "Interactive dashboards",
    cleaning: "Data cleaning & validation",
    predictive: "Predictive modeling",
    regression: "Regression",
    etl: "ETL pipelines",
    relational: "Relational databases",
    "Spectral graph theory": "Spectral graph theory",
    "Fiedler vector": "Fiedler vector"
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk data.",
    lede: "Whether it's research, a model or a product idea, I'd love to hear from you.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    daia: "DAIA"
  },

  footer: {
    rights: "Ariela Mishaan",
    note: "Designed & built with care · Hosted on GitHub Pages",
    top: "Back to top"
  }
};
