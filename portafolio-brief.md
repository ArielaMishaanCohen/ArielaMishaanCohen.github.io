# Brief — Portafolio web de Ariela Mishaan

Este documento describe **qué** quiero en mi portafolio. El **cómo** visual
(layout, componentes, animaciones) queda a tu criterio de diseño; aquí solo
fijo tipografía y color. Hazlo moderno, profesional y muy bien hecho.

## 1. Objetivo y contexto

- Portafolio personal que enlazaré en mi CV para aplicar a maestrías en EE. UU.
  (Carnegie Mellon, Duke y University of Maryland), en programas de Machine
  Learning / IA con enfoque estadístico y aplicado.
- Público: comités de admisión y contactos profesionales.
- Debe verse profesional, moderno y visualmente atractivo. **No debe parecer un
  CV.** Los proyectos son el foco principal.
- Que cuente mi historia como científica de datos: machine learning aplicado,
  estadística y emprendimiento.

## 2. Requisitos generales

- Bilingüe con selector de idioma arriba (Español / Inglés) y la arquitectura
  lista para agregar más idiomas después. Idioma por defecto: inglés (por el
  público). Todo el contenido debe existir en ambos idiomas.
- Responsive (móvil y escritorio) y accesible (foco visible por teclado,
  respeta `prefers-reduced-motion`).
- Los proyectos van de primeros (después del encabezado). La experiencia va al
  final y en formato compacto (para el detalle ya están el CV y LinkedIn).
- Las tarjetas de proyecto deben resaltar visualmente, con un hover sutil.
- Se desplegará en GitHub Pages.

## 3. Tipografía y color (única guía visual)

- Tipografía: **Space Grotesk** para títulos/display e **Inter** para el cuerpo.
  Moderna, sin serifas decorativas.
- Color: base clara y limpia; acento principal **azul marino / índigo** (nada de
  vino ni borgoña). Referencia: mi logo de DAIA usa azul marino con degradado
  hacia morado/índigo; el acento del sitio debe armonizar con eso.
- Estética general: limpia, elegante y moderna.

## 4. Encabezado (hero)

- Nombre: **Ariela Mishaan**. Rol: Data Scientist / Científica de Datos.
- Frase: “Machine learning aplicado, business intelligence y emprendimiento.”
- Intro breve (1–2 líneas): construyo modelos de ML y sistemas de analítica de
  datos; co-fundé DAIA; estoy terminando mi Ingeniería en Ciencia de Datos en la
  Universidad del Valle de Guatemala. (No mencionar la maestría.)
- Botones: Ver proyectos, Descargar CV, LinkedIn, GitHub.
- No incluir gráficas decorativas. No incluir promedio (GPA) ni percentiles tipo
  “top 3%”.

## 5. Proyectos destacados (protagonistas, con miniatura y hover sutil)

Cada tarjeta lleva: título, etiqueta de equipo/rol, descripción corta, tags de
tecnología, enlaces (repositorio, reporte en PDF, demo en vivo cuando aplique) y
una **miniatura = una figura representativa del reporte** del proyecto.

1. **DAIA** — usar el logo de DAIA como imagen de la tarjeta. Proyecto en equipo.
   Rol: Co-fundadora y líder técnica (desarrollo del producto). Plataforma SaaS
   B2B multiempresa de business intelligence: pipelines de datos automatizados,
   tableros de KPIs y modelos de ML (forecasting, detección de anomalías,
   recomendaciones) en una app web funcional. Validada con investigación de
   mercado, entrevistas y pilotos: tres pilotos en curso y contrato con el primer
   cliente enterprise en proceso (sin nombre de cliente, por NDA).
   Enlaces: sitio en vivo `daia.com.gt`; repositorio privado.
   Tags: Python, FastAPI, React/Next.js, PostgreSQL, ML.

2. **Predicción del Mundial 2026** — Equipo de 2. Sistema de aprendizaje
   estadístico que integra cinco fuentes de datos (43,364 partidos históricos,
   ratings FIFA, valoraciones de mercado, indicadores del Banco Mundial, fixtures
   oficiales) para predecir resultados, marcadores y la ronda de cada selección,
   más una simulación Monte Carlo de 10,000 iteraciones para probabilidades de
   campeonato. Mejor modelo de partido: gradient boosting (~64%).
   Miniatura sugerida: la gráfica de favoritos / probabilidades de campeonato.
   Enlaces: repositorio, reporte (PDF), dashboard en vivo (el HTML de la
   quiniela). Tags: Python, scikit-learn, XGBoost, Monte Carlo.

3. **Análisis del sistema ECOBICI** — Equipo de 2. Estudio estadístico sobre
   43.6 millones de viajes (2024–2026): PCA, K-Means, clustering jerárquico,
   GMM/EM y espectral, KDE, t-SNE y regresión regularizada; se identificaron
   cuatro perfiles de usuario y un patrón predominantemente laboral.
   Miniatura sugerida: una figura de clustering (proyección PCA 2D o dendrograma).
   Enlaces: repositorio, reporte. Tags: Python, PCA, Clustering, t-SNE/KDE.

4. **Fine-tuning de LLMs para noticias** — Equipo de 2. Fine-tuning de modelos
   transformer en tres tareas de NLP: summarization abstractivo (BART),
   clasificación de sentimiento (DistilBERT, MiniLM) y clustering
   (Sentence-Transformers + HDBSCAN), con análisis de explicabilidad (XAI) de
   errores, sesgo y consistencia factual.
   Miniatura sugerida: la matriz de confusión o el clustering de noticias.
   Enlaces: repositorio, reporte. Tags: PyTorch, Hugging Face, Transformers, HDBSCAN.

5. **Data Science y BI en SOPHOS** — Pasantía. Cuatro modelos predictivos
   (forecasting de demanda, recomendación, optimización de precios y churn), 6+
   tableros en Streamlit y un metric store SQL de 30+ tablas.
   Confidencial (NDA): sin nombre de cliente ni cifras; si se muestra alguna
   captura, tapar los números.
   Miniatura sugerida: un dashboard con números tapados (o un ícono si no hay).
   Enlaces: bajo NDA (sin repositorio público). Tags: Python, SQL, Streamlit,
   modelado predictivo.

## 6. Más proyectos (cuadrícula compacta: figura o ícono + título + 1 línea + enlaces)

- **Detección de eventos en fútbol (Visión por Computadora)** — Equipo de 5.
  Detección de eventos desde video con transfer learning (EfficientNetB0) y
  Conv1D temporal. Repo: `github.com/ArielaMishaanCohen/ProyectoVC`. Reporte.
- **Predicción de tarifas de taxi en NYC** — Equipo de 4. Regresión supervisada
  con feature engineering; Random Forest el mejor (MAE 2.20). Repo, reporte.
- **IA para Othello (búsqueda adversaria)** — Equipo de 4. Agentes Alpha-Beta,
  Expectimax y MCTS con interfaz interactiva y comparación por torneo. Repo, reporte.
- **Laberintos: generación y búsqueda** — Equipo de 4. Generación con Kruskal/Prim
  y búsqueda BFS, DFS, Dijkstra, A* en 25 escenarios. Repo, reporte.
- **Segmentación de imágenes espectral** — Equipo. Segmentación binaria con un
  grafo de afinidad entre píxeles y el vector de Fiedler del laplaciano normalizado.
  Repo, reporte.
- **(Opcional) Fingerspelling ASL con Transformers** — Equipo de 2. Reconocimiento
  seq2seq desde secuencias de keypoints de MediaPipe; demo en Streamlit; análisis
  honesto de la dinámica de entrenamiento. Nota: los resultados fueron flojos;
  incluir solo si quiero mostrar amplitud, enmarcándolo en la arquitectura y el
  análisis. Repo, reporte.

## 7. Experiencia (compacta, al final)

- **Consultora Jr. en Datos e IT — Solidaridad** (may 2026 – actualidad).
  Limpieza y validación de datos, ML base para forecasting de indicadores y
  tableros en Looker Studio para programas de agricultura sostenible.
- **Analista de datos del Mercado Mayorista de Electricidad (Practicante) — CNEE**
  (jun – dic 2025). 12 tableros en Tableau; ingesta automatizada de registros
  diarios de alta dimensión con Perl, Python y R hacia una base unificada.
- **Practicante de Data Science y BI — SOPHOS** (may 2025 – ene 2026). Ver el
  proyecto destacado.
- **Auxiliar de cátedra — Universidad del Valle de Guatemala** (ene 2024 –
  actualidad). Califico tareas y doy retroalimentación con rúbrica a 30+
  estudiantes por ciclo en Análisis Real, Algoritmos, Data Science y Álgebra
  Lineal Avanzada. Antes, tutora de Precálculo (2023).
  Importante: NO decir que impartí clases; solo calificación y retroalimentación.
  La tutoría fue únicamente de precálculo.

## 8. Formación y habilidades

- **Universidad del Valle de Guatemala**
  - B.S. en Ciencia de Datos (ene 2022 – jul 2026).
  - Licenciatura en Ingeniería en Ciencia de Datos (prevista may 2027).
  - Tesis emprendedora: DAIA (`daia.com.gt`).
  - Honores: Beca Potencia-T; Honor al Mérito Académico (2022–2025).
    (No incluir GPA ni percentiles.)
- **Habilidades**
  - Lenguajes y herramientas: Python, R, SQL, Java, LaTeX, Git.
  - ML y estadística: scikit-learn, PyTorch, TensorFlow, Transformers,
    PCA/clustering, regresión.
  - BI e ingeniería de datos: Tableau, Looker Studio, Power BI, Streamlit,
    pipelines ETL, bases de datos relacionales.
- **Idiomas**: Español (nativo), Inglés (C1–C2; usar el nivel que coincida con mi
  CV final), Alemán C1, Hebreo B1, Francés B2.

## 9. Contacto

- Email: `ariela.mishaan@gmail.com`
- LinkedIn: `linkedin.com/in/ariela-mishaan`
- GitHub: `github.com/ArielaMishaanCohen`
- DAIA: `daia.com.gt`
- CV en PDF (usar la versión de una página en inglés).

## 10. Reglas de honestidad y confidencialidad (importantes)

- Marcar los proyectos en equipo como tales; indicar rol solo donde sea real
  (DAIA: co-fundadora y líder técnica).
- NDA: DAIA sin nombre de cliente; SOPHOS sin nombre de cliente ni cifras.
- Auxiliaturas: calificación y retroalimentación, no docencia; la tutoría fue
  solo de precálculo.
- No incluir GPA ni “top 3%”.

## 11. Activos que voy a entregar

- Logo de DAIA (`logo-daia.png`).
- PDFs de los reportes (para extraer las miniaturas y para enlazarlos).
- HTML de la quiniela del Mundial (para la demo en vivo).
- CV en PDF (versión de una página en inglés).
- URLs reales de mis repositorios públicos. Nota: varios se llaman “Proyecto2”,
  “ProyectoVC”, etc.; conviene renombrar a nombres descriptivos los que vayamos a
  destacar (GitHub redirige el enlace antiguo automáticamente) y agregarles un
  README.

## 12. Despliegue

- GitHub Pages. Preferencia: sitio de usuario en `arielamishaancohen.github.io`
  (o un repositorio de proyecto).

## 13. Página de perfil de GitHub (README, opcional pero recomendado)

- Si creo un repositorio público llamado exactamente `ArielaMishaanCohen` (igual a
  mi nombre de usuario) con un archivo `README.md`, ese README se muestra como
  portada de mi perfil de GitHub: es lo primero que ve quien abre mi perfil.
- Es distinto del sitio del portafolio. Que sea corto y profesional: una línea de
  quién soy (Data Scientist — machine learning aplicado, business intelligence y
  emprendimiento), 2–4 proyectos destacados con enlace, un enlace visible al
  portafolio (`arielamishaancohen.github.io`) y contacto (LinkedIn, email, DAIA).
- Aplican las mismas reglas de honestidad y NDA que el sitio, y sin GPA ni
  percentiles.
- Aquí el bilingüe no es obligatorio; basta inglés (o inglés con un bloque corto
  en español).
