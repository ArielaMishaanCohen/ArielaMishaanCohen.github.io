window.PORTFOLIO_I18N = window.PORTFOLIO_I18N || {};
window.PORTFOLIO_I18N.es = {
  meta: {
    lang: "es",
    label: "ES",
    name: "Español",
    title: "Ariela Mishaan — Científica de Datos",
    description:
      "Portafolio de Ariela Mishaan, científica de datos enfocada en machine learning aplicado, business intelligence y emprendimiento."
  },

  ui: {
    skip: "Saltar al contenido",
    menu: "Menú",
    language: "Idioma",
    theme: "Cambiar tema de color",
    nav: {
      work: "Proyectos",
      more: "Más proyectos",
      experience: "Experiencia",
      background: "Formación",
      contact: "Contacto"
    },
    links: {
      report: "Reporte",
      repo: "Código",
      demo: "Dashboard en vivo",
      site: "Visitar daia.com.gt",
      privateRepo: "Repositorio privado",
      watchDemo: "Ver demo",
      close: "Cerrar video",
      videoTitle: "Demo del producto DAIA",
      nda: "Bajo NDA · sin código público"
    },
    carousel: {
      label: "Proyectos destacados",
      prev: "Proyecto anterior",
      next: "Proyecto siguiente",
      hint: "Desliza o usa las flechas"
    },
    copy: { idle: "Copiar email", done: "Copiado al portapapeles" },
    opensPdf: "(PDF, se abre en otra pestaña)",
    opensNew: "(se abre en otra pestaña)",
    noscript: "Este sitio necesita JavaScript para mostrar su contenido."
  },

  hero: {
    eyebrow: "Científica de Datos",
    location: "Guatemala",
    tagline: "Machine learning aplicado, business intelligence y emprendimiento.",
    intro:
      "Construyo modelos de machine learning y sistemas de analítica de datos. Co-fundé DAIA y estoy terminando mi Ingeniería en Ciencia de Datos en la Universidad del Valle de Guatemala.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
    nowLabel: "Actualmente",
    now: [
      { role: "Co-fundadora y líder técnica", org: "DAIA" },
      { role: "Consultora Jr. en Datos e IT", org: "Solidaridad" },
      { role: "Ingeniería en Ciencia de Datos", org: "Universidad del Valle de Guatemala" }
    ]
  },

  sections: {
    work: {
      index: "01",
      eyebrow: "Proyectos destacados",
      title: "Proyectos que van de datos crudos a decisiones reales.",
      lede: "Aprendizaje estadístico, NLP y ML aplicado — y el producto que estoy construyendo."
    },
    more: {
      index: "02",
      eyebrow: "Más proyectos",
      title: "Algoritmos, visión y búsqueda.",
      lede: "Proyectos de curso, cada uno con su reporte completo."
    },
    experience: {
      index: "03",
      eyebrow: "Experiencia",
      title: "Dónde he trabajado con datos.",
      lede: "La versión corta — el detalle está en mi CV."
    },
    background: {
      index: "04",
      eyebrow: "Formación",
      title: "Educación y habilidades.",
      lede: ""
    }
  },

  venture: {
    kicker: "Emprendimiento · Proyecto en equipo",
    role: "Co-fundadora y líder técnica — desarrollo del producto",
    title: "DAIA",
    subtitle: "Plataforma B2B de business intelligence para empresas en crecimiento.",
    description:
      "SaaS B2B multiempresa: pipelines de datos automatizados, tableros de KPIs y modelos de machine learning — forecasting, detección de anomalías y recomendaciones — integrados en una aplicación web funcional.",
    validationTitle: "Validada en campo",
    validation: [
      "Investigación de mercado y entrevistas con clientes",
      "Tres pilotos en curso",
      "Primer contrato enterprise en proceso"
    ],
    shotAlt: "Dashboard de KPIs de DAIA con insights automáticos",
    shotBackAlt: "Pantalla de inicio de DAIA con reportes descargables"
  },

  projects: {
    worldcup: {
      team: "Equipo de 2",
      title: "Predicción del Mundial 2026",
      description:
        "Sistema de aprendizaje estadístico que integra cinco fuentes de datos — partidos históricos, ratings FIFA, valoraciones de mercado, indicadores del Banco Mundial y fixtures oficiales — para predecir resultados, marcadores y hasta qué ronda llega cada selección.",
      stats: [
        { value: "43,364", label: "partidos históricos" },
        { value: "10,000", label: "simulaciones Monte Carlo" },
        { value: "~64%", label: "accuracy por partido (GB)" }
      ],
      alt: "Probabilidades de campeonato por selección según la simulación Monte Carlo"
    },
    ecobici: {
      team: "Equipo de 2",
      title: "Análisis del sistema ECOBICI",
      description:
        "Estudio estadístico del sistema de bicicletas compartidas de la Ciudad de México (2024–2026) con PCA, K-Means, clustering jerárquico, GMM/EM y espectral, KDE, t-SNE y regresión regularizada.",
      stats: [
        { value: "43.6M", label: "viajes analizados" },
        { value: "4", label: "perfiles de usuario" }
      ],
      alt: "Proyección t-SNE de viajes coloreada por cluster de K-Means"
    },
    llm: {
      team: "Equipo de 2",
      title: "Fine-tuning de LLMs para noticias",
      description:
        "Fine-tuning de transformers para summarization abstractivo (BART), clasificación de sentimiento (DistilBERT, MiniLM) y clustering (Sentence-Transformers + HDBSCAN), con análisis de explicabilidad de errores, sesgo y consistencia factual.",
      stats: [
        { value: "3", label: "tareas de NLP" },
        { value: "XAI", label: "análisis de errores y sesgo" }
      ],
      alt: "Matriz de confusión del clasificador de sentimiento MiniLM ajustado"
    },
    sophos: {
      team: "Pasantía",
      title: "Data Science y BI en SOPHOS",
      description:
        "Modelos predictivos de forecasting de demanda, recomendación, optimización de precios y churn, junto con tableros en Streamlit y un metric store centralizado en SQL.",
      stats: [
        { value: "4", label: "modelos predictivos" },
        { value: "6+", label: "tableros" },
        { value: "30+", label: "tablas en el metric store" }
      ],
      alt: "Dashboard de pronóstico de ventas en Streamlit (cifras ocultas por NDA)",
    },
    vision: {
      team: "Equipo de 5",
      title: "Detección de eventos en fútbol",
      description: "Detección de eventos en video de partidos con transfer learning (EfficientNetB0) y un modelo temporal Conv1D.",
      alt: "Frame de un partido etiquetado por el modelo como jugada"
    },
    taxi: {
      team: "Equipo de 4",
      title: "Tarifas de taxi en NYC",
      description: "Regresión supervisada con feature engineering; Random Forest fue el mejor modelo (MAE 2.20).",
      alt: "Tarifas predichas contra tarifas reales"
    },
    othello: {
      team: "Equipo de 4",
      title: "IA para Othello",
      description: "Agentes Alpha-Beta, Expectimax y MCTS con interfaz interactiva, comparados entre sí en un torneo.",
      alt: "Mapa de calor de los pesos heurísticos posicionales en el tablero de Othello"
    },
    mazes: {
      team: "Equipo de 4",
      title: "Laberintos: generación y búsqueda",
      description: "Laberintos generados con Kruskal y Prim, resueltos con BFS, DFS, Dijkstra y A* en 25 escenarios.",
      alt: "Caminos encontrados por BFS, DFS, Dijkstra y A* en un laberinto generado"
    },
    segmentation: {
      team: "Equipo de 2",
      title: "Segmentación espectral de imágenes",
      description: "Segmentación binaria con un grafo de afinidad entre píxeles y el vector de Fiedler del laplaciano normalizado.",
      alt: "Imágenes originales y sus máscaras de segmentación binaria"
    }
  },

  experience: {
    solidaridad: {
      role: "Consultora Jr. en Datos e IT",
      org: "Solidaridad",
      dates: "May 2026 — Actualidad",
      summary:
        "Limpieza y validación de datos, ML base para forecasting de indicadores y tableros en Looker Studio para programas de agricultura sostenible."
    },
    cnee: {
      role: "Analista de datos del Mercado Mayorista de Electricidad · Practicante",
      org: "CNEE",
      dates: "Jun — Dic 2025",
      summary:
        "12 tableros en Tableau e ingesta automatizada de registros diarios de alta dimensión con Perl, Python y R hacia una base de datos unificada."
    },
    sophos: {
      role: "Practicante de Data Science y BI",
      org: "SOPHOS",
      dates: "May 2025 — Ene 2026",
      summary: "Modelos predictivos, tableros y un metric store en SQL.",
      link: "Ver el proyecto destacado"
    },
    uvg: {
      role: "Auxiliar de cátedra",
      org: "Universidad del Valle de Guatemala",
      dates: "Ene 2024 — Actualidad",
      summary:
        "Califico tareas y doy retroalimentación con rúbrica a 30+ estudiantes por ciclo en Análisis Real, Algoritmos, Data Science y Álgebra Lineal Avanzada. Tutora de Precálculo en 2023."
    }
  },

  education: {
    title: "Educación",
    school: "Universidad del Valle de Guatemala",
    degrees: [
      { name: "B.S. en Ciencia de Datos", dates: "Ene 2022 — Jul 2026" },
      { name: "Licenciatura en Ingeniería en Ciencia de Datos", dates: "Prevista may 2027" }
    ],
    thesisLabel: "Tesis emprendedora",
    thesis: "DAIA",
    honorsLabel: "Honores",
    honors: ["Beca Potencia-T", "Honor al Mérito Académico, 2022–2025"]
  },

  skills: {
    title: "Habilidades",
    groups: {
      tools: "Lenguajes y herramientas",
      ml: "ML y estadística",
      bi: "BI e ingeniería de datos"
    }
  },

  languages: {
    title: "Idiomas",
    names: { es: "Español", en: "Inglés", de: "Alemán", fr: "Francés", he: "Hebreo" },
    levels: { native: "Nativo" }
  },

  tags: {
    predictive: "Modelado predictivo",
    regression: "Regresión",
    etl: "Pipelines ETL",
    relational: "Bases de datos relacionales",
    "Feature engineering": "Feature engineering",
    "Spectral graph theory": "Teoría espectral de grafos",
    "Fiedler vector": "Vector de Fiedler"
  },

  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de datos.",
    lede: "Ya sea investigación, un modelo o una idea de producto, me encantaría saber de ti.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    daia: "DAIA"
  },

  footer: {
    rights: "Ariela Mishaan",
    note: "Diseñado y construido con cuidado · Publicado en GitHub Pages",
    top: "Volver arriba"
  }
};
