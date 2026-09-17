/*
 * Language-independent data: links, images and tags.
 * Text for each item lives in assets/js/i18n/<lang>.js under the same id.
 * To add a public repository later, fill in its `repo` URL.
 */
window.PORTFOLIO_DATA = {
  links: {
    email: "ariela.mishaan@gmail.com",
    linkedin: "https://www.linkedin.com/in/ariela-mishaan",
    github: "https://github.com/ArielaMishaanCohen",
    daia: "https://daia.com.gt",
    cv: "assets/cv/Ariela-Mishaan-CV.pdf"
  },

  venture: {
    id: "daia",
    logo: "assets/img/brand/logo-daia-white.png",
    shots: {
      main: "assets/img/projects/daia-dashboard.webp",
      back: "assets/img/projects/daia-home.webp"
    },
    site: "https://daia.com.gt",
    video: "assets/video/daia-demo.mp4",
    poster: "assets/video/daia-demo-poster.jpg",
    tags: ["Python", "FastAPI", "React / Next.js", "PostgreSQL", "ML"]
  },

  featured: [
    {
      id: "worldcup",
      image: "assets/img/projects/world-cup.webp",
      report: "assets/reports/world-cup-2026-prediction.pdf",
      demo: "demo/world-cup-2026/",
      repo: "https://github.com/ArielaMishaanCohen/Proyecto2",
      tags: ["Python", "scikit-learn", "XGBoost", "Monte Carlo"]
    },
    {
      id: "ecobici",
      image: "assets/img/projects/ecobici.webp",
      report: "assets/reports/ecobici-analysis.pdf",
      repo: "https://github.com/ArielaMishaanCohen/Proyecto1-Aprendizaje",
      tags: ["Python", "PCA", "Clustering", "t-SNE / KDE"]
    },
    {
      id: "llm",
      image: "assets/img/projects/llm-news.webp",
      report: "assets/reports/llm-fine-tuning-news.pdf",
      repo: "https://github.com/ArielaMishaanCohen/Proyecto",
      tags: ["PyTorch", "Hugging Face", "Transformers", "HDBSCAN"]
    },
    {
      id: "sophos",
      image: "assets/img/projects/sophos-forecast.webp",
      fit: "cover",
      focus: "left top",
      nda: true,
      tags: ["Python", "SQL", "Streamlit", "predictive"]
    }
  ],

  more: [
    {
      id: "vision",
      image: "assets/img/projects/football-vision.webp",
      fit: "cover",
      repo: "https://github.com/ArielaMishaanCohen/ProyectoVC",
      report: "assets/reports/football-event-detection.pdf",
      tags: ["Transfer learning", "EfficientNetB0", "Conv1D"]
    },
    {
      id: "taxi",
      image: "assets/img/projects/nyc-taxi.webp",
      report: "assets/reports/nyc-taxi-fare-prediction.pdf",
      repo: "https://github.com/ArielaMishaanCohen/Proyecto-1",
      tags: ["Feature engineering", "Random Forest"]
    },
    {
      id: "othello",
      image: "assets/img/projects/othello.webp",
      report: "assets/reports/othello-adversarial-search.pdf",
      tags: ["Alpha-Beta", "Expectimax", "MCTS"]
    },
    {
      id: "mazes",
      image: "assets/img/projects/mazes.webp",
      report: "assets/reports/maze-generation-search.pdf",
      tags: ["Kruskal / Prim", "A*", "Dijkstra"]
    },
    {
      id: "segmentation",
      image: "assets/img/projects/segmentation.webp",
      report: "assets/reports/spectral-image-segmentation.pdf",
      tags: ["Spectral graph theory", "Fiedler vector"]
    }
  ],

  experience: ["solidaridad", "cnee", "sophos", "uvg"],

  skills: {
    tools: ["Python", "R", "SQL", "Java", "LaTeX", "Git"],
    ml: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "Hugging Face Transformers", "statsmodels", "regression", "PCA / clustering", "timeseries", "montecarlo", "nlp", "recsys", "cv"],
    bi: ["Tableau", "Power BI", "Looker Studio", "Streamlit", "Plotly", "kpi", "dashboards", "cleaning", "etl", "relational"]
  },

  languages: [
    { id: "es", level: "native", dots: 5 },
    { id: "en", level: "C2", dots: 5 },
    { id: "de", level: "C1", dots: 4 },
    { id: "fr", level: "B2", dots: 3 },
    { id: "he", level: "B1+", dots: 2.5 }
  ]
};
