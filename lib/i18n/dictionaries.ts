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
    bio1: "Soy Técnico en Desarrollo de Software y actualmente curso el último año de la Licenciatura en Gestión de Tecnología en la Universidad Nacional de La Matanza.",
    bio2: "Me apasiona el back-end y la resolución de problemas. Disfruto creando soluciones que automatizan procesos y simplifican el trabajo cotidiano de los equipos.",
    bio3: "Soy responsable y exigente con cada proyecto, buscando siempre entregar código limpio, eficiente y bien documentado.",
    highlights: {
      backend: {
        title: "Back-end",
        desc: "APIs REST robustas con Python (FastAPI) y Node.js (Express).",
      },
      db: {
        title: "Bases de Datos",
        desc: "Modelado y consultas en PostgreSQL, MongoDB y SQL.",
      },
      auto: {
        title: "Automatización",
        desc: "Scripts y flujos inteligentes con Python, Apps Script y Docker.",
      },
      solving: {
        title: "Resolución de Problemas",
        desc: "Enfoque analítico para encontrar soluciones eficientes a desafíos complejos.",
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
    techs: {
      label: "Tecnologías",
      sub: "en el stack profesional",
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
      backend: "Back-end",
      fullstack: "Full Stack",
      automation: "Automatización",
    },
    problemLabel: "Problema",
    impactLabel: "Impacto",
    teamBadge: "Trabajo en equipo",
    items: {
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
    },
  },
  stack: {
    sectionIndex: "04.",
    title: "Stack Técnico",
    categories: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de Datos",
      devops: "DevOps & Cloud",
      automation: "Automatización",
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
    bio1: "I'm a Software Development Technician, currently finishing the last year of my BSc in Technology Management at Universidad Nacional de La Matanza.",
    bio2: "I'm passionate about back-end and problem solving. I enjoy building solutions that automate processes and simplify day-to-day teamwork.",
    bio3: "I'm responsible and demanding with every project — I aim to deliver clean, efficient, and well-documented code.",
    highlights: {
      backend: {
        title: "Back-end",
        desc: "Robust REST APIs with Python (FastAPI) and Node.js (Express).",
      },
      db: {
        title: "Databases",
        desc: "Modeling and queries in PostgreSQL, MongoDB, and SQL.",
      },
      auto: {
        title: "Automation",
        desc: "Smart scripts and workflows with Python, Apps Script, and Docker.",
      },
      solving: {
        title: "Problem Solving",
        desc: "Analytical approach to find efficient solutions for complex challenges.",
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
    techs: {
      label: "Technologies",
      sub: "in professional stack",
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
      backend: "Back-end",
      fullstack: "Full Stack",
      automation: "Automation",
    },
    problemLabel: "Problem",
    impactLabel: "Impact",
    teamBadge: "Teamwork",
    items: {
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
    },
  },
  stack: {
    sectionIndex: "04.",
    title: "Tech Stack",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      devops: "DevOps & Cloud",
      automation: "Automation",
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
