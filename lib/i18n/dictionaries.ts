export type Lang = "es" | "en"

const es = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    testimonials: "Reseñas",
    stack: "Stack",
    education: "Estudios",
    contact: "Contacto",
  },
  language: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
  hero: {
    name: "David De Vito",
    role: "Desarrollador Back-end & Automatizaciones",
    tagline:
      "Ayudo a empresas y emprendedores a construir sistemas robustos, rápidos y seguros.",
    ctaProjects: "Ver Proyectos",
    ctaContact: "Contacto",
    ctaCv: "Descargar CV",
    eyebrow: "Back-end & Automation Engineer · Buenos Aires",
    available: "disponible",
    headlinePre: "Construyo la maquinaria que tu negocio ",
    headlineAccent: "no ve",
    headlinePost: ", pero usa todo el día.",
    leadStrong: "APIs, pipelines de datos y automatizaciones",
    leadRest:
      " que sacan el trabajo manual del medio y siguen corriendo cuando cerrás la notebook.",
    pipeline: {
      live: "sistema en producción",
      note: "uptime · sin intervención manual",
      nodes: [
        { glyph: "⟶", label: "Origen", sub: "sheets · web · API" },
        { glyph: "ƒ", label: "Transformar", sub: "normalizar · IA" },
        { glyph: "✓", label: "Validar", sub: "reglas · confianza" },
        { glyph: "↪", label: "Entregar", sub: "DB · email · redes" },
      ],
    },
    terminal: [
      {
        prompt: "~/portfolio",
        command: "whoami",
        outputs: [
          "David De Vito",
          "Back-end · Python · FastAPI · Automatización",
        ],
      },
      {
        prompt: "~/portfolio",
        command: "cat about.txt",
        outputs: [
          "Construyo APIs y automatizaciones",
          "que transforman ideas en productos funcionales.",
        ],
      },
      {
        prompt: "~/portfolio",
        command: "ls ./skills",
        outputs: ["[Python] [FastAPI] [Docker] [PostgreSQL] [n8n] [Apps Script]"],
      },
    ],
  },
  about: {
    sectionIndex: "01.",
    title: "Sobre Mí",
    fileName: "about.md",
    bio1: "Soy Técnico en Desarrollo de Software y estoy cursando el último año de la Licenciatura en Gestión de Tecnología en la Universidad Nacional de La Matanza.",
    bio2: "Trabajo en automatización y back-end para una empresa del sector de medios de pago, donde los procesos que construyo tienen que correr solos, sin que nadie los esté mirando. Eso me volvió obsesivo con dos cosas: que no se rompan, y que el próximo que abra el código entienda qué hice y por qué.",
    bio3: "Me muevo cómodo donde el problema todavía no tiene forma —cuando hay que entender un proceso manual, ver qué se puede automatizar y construir algo que aguante en producción. Esa parte, la de pasar del «esto lo hacemos a mano» al «esto ya corre solo», es la que más disfruto.",
    highlights: {
      backend: {
        title: "Back-end",
        desc: "APIs REST con Python (FastAPI) y Node.js (Express): autenticación con JWT, roles y endpoints documentados.",
      },
      db: {
        title: "Bases de Datos",
        desc: "Modelado y consultas en PostgreSQL y MongoDB. Validación, geocodificación y procesamiento de datos en lote.",
      },
      auto: {
        title: "Automatización",
        desc: "Flujos en n8n, Make y Apps Script que reemplazan tareas manuales y corren en producción sin intervención.",
      },
    },
  },
  metrics: {
    rating: {
      label: "Rating Workana",
      sub: "de 4 clientes verificados",
    },
    projects: {
      label: "Proyectos destacados",
      sub: "producción y open source",
    },
    bilingual: {
      label: "Bilingüe",
      sub: "trabajo en ES y EN",
    },
    months: {
      label: "Meses en TradingPos",
      sub: "Back-end & Data Automation",
    },
  },
  experience: {
    sectionIndex: "02.",
    title: "Experiencia Laboral",
    tradingpos: {
      role: "Desarrollador Back-end & Data Automation",
      company: "TradingPos",
      period: "Mar 2025 - Presente",
      bullets: [
        "Diseñé e implementé un sistema de normalización de direcciones que procesa archivos Excel en lote, los valida contra OSM y Google APIs, geocodifica automáticamente y los clasifica por nivel de confianza.",
        "Automaticé procesos operativos con Apps Script y Python, reduciendo trabajo manual repetitivo en los equipos de operaciones.",
        "Implementé control de acceso con JWT y roles, y documenté endpoints para facilitar la adopción interna.",
      ],
    },
  },
  projects: {
    sectionIndex: "03.",
    title: "Proyectos",
    filters: {
      all: "Todos",
      web: "Web & Apps",
      backend: "Back-end",
      automation: "Automatización",
    },
    groups: {
      web: "Web & Apps",
      backend: "Back-end & APIs",
      automation: "Automatizaciones",
    },
    problemLabel: "Problema",
    impactLabel: "Impacto",
    teamBadge: "En equipo",
    privateBadge: "App privada",
    items: {
      visage: {
        title: "Visage Buenos Aires",
        problem:
          "Un centro de estética necesitaba comunicar mejor los cuidados pre y post tratamiento a sus clientes.",
        description:
          "Sitio bilingüe (ES/EN) que explica los cuidados de cada tratamiento y centraliza el contacto por WhatsApp e Instagram.",
        impact: "Mejoró la comunicación con sus clientes.",
      },
      mapa: {
        title: "Mapa de Barridos con IA",
        problem:
          "Cientos de casos sin una forma visual de analizarlos ni resumirlos.",
        description:
          "Web que ubica los casos en un mapa interactivo con filtros por fecha y genera informes automáticos con IA (Gemini).",
        impact:
          "Organización geográfica de los casos e insights al instante.",
      },
      lorena: {
        title: "Lorena Danán — Autora",
        problem:
          "Una escritora sin un espacio propio donde presentar su biografía y sus obras.",
        description:
          "Sitio bilingüe (ES/EN) con su biografía, sus libros y novedades, pensado para lectores y prensa.",
        impact: "Hoy su biografía aparece en los buscadores.",
      },
      alquimia: {
        title: "Alquimia Luz y Sombra",
        problem:
          "Una tarotista sin un canal propio para mostrar sus servicios.",
        description:
          "Sitio que presenta sus servicios de tarot y facilita el contacto, con una estética acorde a su marca.",
        impact: "Amplió su llegada y mostró mejor sus servicios.",
      },
      casos: {
        title: "Plataforma de Asignación de Casos",
        problem:
          "El equipo necesitaba asignar y controlar casos de auditoría entre varios auditores, con su información centralizada.",
        description:
          "Aplicación interna que asigna casos a auditores y permite seguir su estado e información en un solo lugar. Acceso restringido por login.",
        impact:
          "Más control sobre los auditores, los casos y su información.",
      },
      normalizer: {
        title: "Normalizador de Direcciones",
        problem:
          "Miles de direcciones con errores tipográficos y formatos inconsistentes que requerían validación manual.",
        description:
          "Sistema que valida direcciones contra OSM y APIs de Google, las clasifica por confianza (Auto ≥95%, Auditoría 70-94%, Rechazo <70%) y geocodifica coordenadas. Incluye roles con JWT.",
        impact:
          "Procesamiento en lote automatizado y reducción significativa de auditoría manual.",
      },
      avanti: {
        title: "Avanti — Fintech",
        problem: "Emprendedores sin acceso a financiamiento tradicional.",
        description:
          "Plataforma que conecta emprendedores con inversores, democratizando las oportunidades de inversión.",
        impact:
          "Proyecto No Country con equipo multidisciplinario remoto.",
      },
      mystery: {
        title: "Formulario Mystery Shopping",
        problem:
          "Auditores de campo debían reportar implementación de MODO en comercios desde el celular.",
        description:
          "Web app con login por DNI, formularios detallados, subida de fotos como evidencia y edición de registros. Optimizada para uso móvil.",
        impact: "Digitalizó el proceso de auditoría de campo.",
      },
      boostup: {
        title: "BoostUp — Crowdfunding",
        problem:
          "Startups emergentes sin un canal directo para captar inversión inicial.",
        description:
          "Plataforma de financiamiento colectivo que conecta proyectos con inversores interesados en innovación y sostenibilidad.",
        impact: "Proyecto No Country con trabajo en equipo remoto.",
      },
      social: {
        title: "Fábrica de Contenido para Redes",
        problem:
          "Producir y publicar contenido en varias redes para cada idea del cliente era lento y repetitivo.",
        description:
          "A partir de una idea en Google Sheets, un webhook en n8n genera imágenes con IA, un guion y un video; luego Make lo publica en YouTube, Facebook, Instagram y TikTok con sus descripciones y hashtags.",
        impact:
          "De una idea a un reel y un post publicados en todas las redes, automáticamente.",
      },
      leadgen: {
        title: "Captación de Leads con IA",
        problem:
          "Buscar negocios y conseguir contactos calificados a mano consumía horas y no escalaba.",
        description:
          "Flujo en Make que encuentra negocios con Google Maps Platform, scrapea sus sitios para extraer emails y envía correos personalizados generados con IA.",
        impact: "Prospección automatizada de punta a punta, sin trabajo manual.",
      },
      whatsapp: {
        title: "Outreach por WhatsApp",
        problem:
          "Enviar mensajes y seguir cada conversación manualmente era inviable a escala.",
        description:
          "Automatización en Make que envía mensajes por WhatsApp, detecta las respuestas y dispara seguimientos según el estado de cada contacto.",
        impact: "Conversaciones y seguimientos gestionados automáticamente.",
      },
    },
  },
  stack: {
    sectionIndex: "04.",
    title: "Stack Técnico",
    categories: {
      backend: "Back-end",
      data: "Bases de datos",
      infra: "Infra & Cloud",
      frontend: "Front-end",
      automation: "Automatización",
      tooling: "Herramientas",
    },
  },
  testimonials: {
    sectionIndex: "05.",
    title: "Reseñas de Clientes",
    subtitle: "Reseñas verificadas de Workana",
    verifiedBadge: "Verificado en Workana",
    viewProfile: "Ver perfil en Workana",
    items: [
      {
        client: "L. A. M.",
        project: "Blog WordPress Multilingüe",
        quote:
          "Excelente. David es un gran profesional, atento y eficaz.",
      },
      {
        client: "J. F.",
        project: "App AppSheet para Gestión de Informes",
        quote:
          "Muy buen trabajo, 100% recomendable. Cumplió con todo el trabajo muy prolijo.",
      },
      {
        client: "K.",
        project: "Workflow n8n para Automatización en Redes Sociales",
        quote: "Un trabajo de un 10.",
      },
    ],
  },
  education: {
    sectionIndex: "06.",
    title: "Estudios",
    items: [
      {
        type: "degree" as const,
        title: "Licenciatura en Gestión de Tecnología",
        institution: "Universidad Nacional de La Matanza",
        year: "Abr 2025 - Actualidad (último año)",
      },
      {
        type: "degree" as const,
        title: "Tecnicatura en Desarrollo de Software",
        institution: "Instituto de Formación Técnica Superior N°4",
        year: "Ago 2021 - Ago 2024",
      },
      {
        type: "cert" as const,
        title: "Back End Developer Core",
        institution: "Universidad Tecmilenio",
        year: "Certificado",
        link: "https://www.credly.com/badges/f78c7f5f-219b-45ae-a9ea-c015c31584b5/linked_in_profile",
      },
      {
        type: "cert" as const,
        title: "Engineering Warrior Training — Hard Challenges",
        institution:
          "Programación Estructurada, Pensamiento Crítico, Programación Lógica",
        year: "Certificado",
      },
    ],
  },
  contact: {
    sectionIndex: "07.",
    title: "Contacto",
    fileName: "contact-form.sh",
    intro:
      "Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Si tenés una idea o simplemente querés conectar, no dudes en escribirme.",
    nameLabel: "nombre",
    emailLabel: "email",
    messageLabel: "mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Escribí tu mensaje...",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    successHeader: "$ mensaje_enviado",
    success: "¡Gracias por tu mensaje! Te responderé pronto.",
    errorSend: "Hubo un error al enviar el mensaje. Intentá de nuevo.",
    errorConn: "Error de conexión. Verificá tu internet e intentá de nuevo.",
    emailSubject: "Nuevo mensaje desde tu Portfolio",
  },
  footer: {
    builtWith: "Construido con Next.js, Tailwind CSS y Shadcn/UI",
  },
}

type Dict = typeof es

const en: Dict = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    testimonials: "Reviews",
    stack: "Stack",
    education: "Education",
    contact: "Contact",
  },
  language: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
  hero: {
    name: "David De Vito",
    role: "Back-end Developer & Automation",
    tagline:
      "I help companies and founders build robust, fast, and secure systems.",
    ctaProjects: "View Projects",
    ctaContact: "Contact",
    ctaCv: "Download CV",
    eyebrow: "Back-end & Automation Engineer · Buenos Aires",
    available: "available",
    headlinePre: "I build the machinery your business ",
    headlineAccent: "doesn't see",
    headlinePost: ", but uses all day.",
    leadStrong: "APIs, data pipelines and automations",
    leadRest:
      " that take manual work out of the loop and keep running after you close the laptop.",
    pipeline: {
      live: "system in production",
      note: "uptime · no manual intervention",
      nodes: [
        { glyph: "⟶", label: "Source", sub: "sheets · web · API" },
        { glyph: "ƒ", label: "Transform", sub: "normalize · AI" },
        { glyph: "✓", label: "Validate", sub: "rules · confidence" },
        { glyph: "↪", label: "Deliver", sub: "DB · email · social" },
      ],
    },
    terminal: [
      {
        prompt: "~/portfolio",
        command: "whoami",
        outputs: [
          "David De Vito",
          "Back-end · Python · FastAPI · Automation",
        ],
      },
      {
        prompt: "~/portfolio",
        command: "cat about.txt",
        outputs: [
          "I build APIs and automations",
          "that turn ideas into working products.",
        ],
      },
      {
        prompt: "~/portfolio",
        command: "ls ./skills",
        outputs: ["[Python] [FastAPI] [Docker] [PostgreSQL] [n8n] [Apps Script]"],
      },
    ],
  },
  about: {
    sectionIndex: "01.",
    title: "About Me",
    fileName: "about.md",
    bio1: "I'm a Software Development Technician, currently in the final year of my degree in Technology Management at Universidad Nacional de La Matanza.",
    bio2: "I work in automation and back-end for a company in the payments industry, where the processes I build have to run on their own, with no one watching them. That made me obsessive about two things: that they don't break, and that whoever opens the code next understands what I did and why.",
    bio3: "I'm at home where the problem doesn't have a shape yet — understanding a manual process, figuring out what can be automated, and building something that holds up in production. Going from «we do this by hand» to «this already runs on its own» is the part I enjoy most.",
    highlights: {
      backend: {
        title: "Back-end",
        desc: "REST APIs with Python (FastAPI) and Node.js (Express): JWT authentication, roles, and documented endpoints.",
      },
      db: {
        title: "Databases",
        desc: "Modeling and queries in PostgreSQL and MongoDB. Validation, geocoding, and batch data processing.",
      },
      auto: {
        title: "Automation",
        desc: "Flows in n8n, Make, and Apps Script that replace manual tasks and run unattended in production.",
      },
    },
  },
  metrics: {
    rating: {
      label: "Workana rating",
      sub: "from 4 verified clients",
    },
    projects: {
      label: "Featured projects",
      sub: "production and open source",
    },
    bilingual: {
      label: "Bilingual",
      sub: "work in ES and EN",
    },
    months: {
      label: "Months at TradingPos",
      sub: "Back-end & Data Automation",
    },
  },
  experience: {
    sectionIndex: "02.",
    title: "Work Experience",
    tradingpos: {
      role: "Back-end Developer & Data Automation",
      company: "TradingPos",
      period: "Mar 2025 - Present",
      bullets: [
        "Designed and shipped an address normalization system that batch-processes Excel files, validates against OSM and Google APIs, auto-geocodes, and classifies records by confidence level.",
        "Automated operational processes with Apps Script and Python, reducing repetitive manual work for ops teams.",
        "Implemented JWT role-based access and documented endpoints to accelerate internal adoption.",
      ],
    },
  },
  projects: {
    sectionIndex: "03.",
    title: "Projects",
    filters: {
      all: "All",
      web: "Web & Apps",
      backend: "Back-end",
      automation: "Automation",
    },
    groups: {
      web: "Web & Apps",
      backend: "Back-end & APIs",
      automation: "Automations",
    },
    problemLabel: "Problem",
    impactLabel: "Impact",
    teamBadge: "Team",
    privateBadge: "Private app",
    items: {
      visage: {
        title: "Visage Buenos Aires",
        problem:
          "An aesthetics center needed to better communicate pre- and post-treatment care to its clients.",
        description:
          "Bilingual (ES/EN) site explaining the care for each treatment and centralizing contact via WhatsApp and Instagram.",
        impact: "Improved communication with their clients.",
      },
      mapa: {
        title: "Sweep Map with AI",
        problem:
          "Hundreds of cases with no visual way to analyze or summarize them.",
        description:
          "Web app that plots cases on an interactive map with date filters and generates automatic reports with AI (Gemini).",
        impact: "Geographic organization of cases and instant insights.",
      },
      lorena: {
        title: "Lorena Danán — Author",
        problem:
          "A writer without her own space to present her biography and works.",
        description:
          "Bilingual (ES/EN) site with her biography, books, and news, aimed at readers and press.",
        impact: "Her biography now appears in search results.",
      },
      alquimia: {
        title: "Alquimia Luz y Sombra",
        problem:
          "A tarot reader without her own channel to showcase her services.",
        description:
          "Site presenting her tarot services and making contact easy, with branding that fits her identity.",
        impact: "Broadened her reach and better showcased her services.",
      },
      casos: {
        title: "Case Assignment Platform",
        problem:
          "The team needed to assign and track audit cases across several auditors, with centralized information.",
        description:
          "Internal app that assigns cases to auditors and tracks their status and details in one place. Login-restricted access.",
        impact: "More control over auditors, cases, and their information.",
      },
      normalizer: {
        title: "Address Normalizer",
        problem:
          "Thousands of addresses with typos and inconsistent formats that required manual review.",
        description:
          "System that validates addresses against OSM and Google APIs, classifies them by confidence (Auto ≥95%, Review 70-94%, Reject <70%) and geocodes coordinates. Includes JWT role-based access.",
        impact:
          "Automated batch processing and significant reduction in manual audit.",
      },
      avanti: {
        title: "Avanti — Fintech",
        problem: "Founders without access to traditional financing.",
        description:
          "Platform connecting entrepreneurs with investors, democratizing investment opportunities.",
        impact: "No Country project with a multidisciplinary remote team.",
      },
      mystery: {
        title: "Mystery Shopping Form",
        problem:
          "Field auditors needed to report MODO implementation at stores from their phones.",
        description:
          "Web app with ID-based login, detailed forms, photo upload as evidence, and record editing. Mobile-optimized.",
        impact: "Digitized the field audit process.",
      },
      boostup: {
        title: "BoostUp — Crowdfunding",
        problem:
          "Emerging startups without a direct channel to raise initial capital.",
        description:
          "Crowdfunding platform connecting projects with investors interested in innovation and sustainability.",
        impact: "No Country project with remote teamwork.",
      },
      social: {
        title: "Social Content Factory",
        problem:
          "Producing and publishing content across several networks for every client idea was slow and repetitive.",
        description:
          "From an idea in Google Sheets, an n8n webhook generates AI images, a script, and a video; then Make publishes it to YouTube, Facebook, Instagram, and TikTok with captions and hashtags.",
        impact:
          "From one idea to a reel and post published across every network, automatically.",
      },
      leadgen: {
        title: "AI Lead Generation",
        problem:
          "Finding businesses and qualified contacts by hand took hours and didn't scale.",
        description:
          "Make workflow that finds businesses via Google Maps Platform, scrapes their sites to extract emails, and sends personalized AI-generated outreach.",
        impact: "End-to-end automated prospecting with no manual work.",
      },
      whatsapp: {
        title: "WhatsApp Outreach",
        problem:
          "Sending messages and following up on each conversation manually didn't scale.",
        description:
          "Make automation that sends WhatsApp messages, detects replies, and triggers follow-ups based on each contact's status.",
        impact: "Conversations and follow-ups handled automatically.",
      },
    },
  },
  stack: {
    sectionIndex: "04.",
    title: "Tech Stack",
    categories: {
      backend: "Back-end",
      data: "Databases",
      infra: "Infra & Cloud",
      frontend: "Front-end",
      automation: "Automation",
      tooling: "Tooling",
    },
  },
  testimonials: {
    sectionIndex: "05.",
    title: "Client Reviews",
    subtitle: "Verified reviews from Workana",
    verifiedBadge: "Verified on Workana",
    viewProfile: "View Workana profile",
    items: [
      {
        client: "L. A. M.",
        project: "Multilingual WordPress Blog",
        quote:
          "Excellent. David is a great professional — attentive and effective.",
      },
      {
        client: "J. F.",
        project: "AppSheet App for Report Management",
        quote:
          "Great job, 100% recommended. Delivered everything very neatly.",
      },
      {
        client: "K.",
        project: "n8n Workflow for Social Media Automation",
        quote: "A 10-out-of-10 job.",
      },
    ],
  },
  education: {
    sectionIndex: "06.",
    title: "Education",
    items: [
      {
        type: "degree" as const,
        title: "BSc in Technology Management",
        institution: "Universidad Nacional de La Matanza",
        year: "Apr 2025 - Present (final year)",
      },
      {
        type: "degree" as const,
        title: "Software Development Technician",
        institution: "Instituto de Formación Técnica Superior N°4",
        year: "Aug 2021 - Aug 2024",
      },
      {
        type: "cert" as const,
        title: "Back End Developer Core",
        institution: "Universidad Tecmilenio",
        year: "Certificate",
        link: "https://www.credly.com/badges/f78c7f5f-219b-45ae-a9ea-c015c31584b5/linked_in_profile",
      },
      {
        type: "cert" as const,
        title: "Engineering Warrior Training — Hard Challenges",
        institution:
          "Structured Programming, Critical Thinking, Logic Programming",
        year: "Certificate",
      },
    ],
  },
  contact: {
    sectionIndex: "07.",
    title: "Contact",
    fileName: "contact-form.sh",
    intro:
      "I'm open to new opportunities, collaborations, and interesting projects. If you have an idea or just want to connect, drop me a line.",
    nameLabel: "name",
    emailLabel: "email",
    messageLabel: "message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Write your message...",
    send: "Send Message",
    sending: "Sending...",
    successHeader: "$ message_sent",
    success: "Thanks for your message! I'll get back to you soon.",
    errorSend: "There was an error sending the message. Please try again.",
    errorConn: "Connection error. Check your internet and try again.",
    emailSubject: "New message from your Portfolio",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS and Shadcn/UI",
  },
}

export const dictionaries: Record<Lang, Dict> = { es, en }
