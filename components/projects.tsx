import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Normalizador de Direcciones",
    description:
      "Sistema que normaliza direcciones con errores tipográficos y formatos inconsistentes. Valida contra una base de datos local (OSM) y APIs de Google, clasifica automáticamente en Aprobación Automática (≥95%), Auditoría Requerida (70-94%) y Rechazo (<70%), y geocodifica coordenadas. Incluye sistema de roles con JWT.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/DavidDeVito2001/AmexDirecciones",
    live: null,
    github2: "https://github.com/DavidDeVito2001/AmexDireccionesFrontend",
  },
  {
    title: "Avanti — Fintech",
    description:
      "Plataforma que conecta emprendedores con inversores, eliminando barreras tradicionales de financiamiento. Permite que cualquier persona con una gran idea obtenga el apoyo necesario para hacerla realidad, democratizando las oportunidades de inversión.",
    tags: ["Node.js", "React", "MongoDB", "Express"],
    github: "https://github.com/No-Country-simulation/S20-17-webapp",
    live: null,
  },
  {
    title: "Formulario Mystery Shopping",
    description:
      "Aplicación web para auditores de campo que verifican la implementación de MODO como método de pago en comercios. Permite inicio de sesión por DNI, formularios detallados, subida de fotos como evidencia y edición de registros. Optimizado para uso móvil en campo.",
    tags: ["Apps Script", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/DavidDeVito2001/MODO-formulario",
    live: null,
  },
  {
    title: "BoostUp — Crowdfunding",
    description:
      "Plataforma de financiamiento colectivo que conecta proyectos StartUp emergentes con inversores interesados en innovación y sostenibilidad. Facilita la creación y gestión de campañas de financiamiento.",
    tags: ["Node.js", "React", "Express", "MongoDB"],
    github: "https://github.com/No-Country-simulation/c21-21-m-node-react",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">{"03."}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Proyectos
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-secondary border border-border rounded-lg p-6 hover:border-primary/40 transition-all flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary font-mono text-2xl">{"{ }"}</div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver repositorio de ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {"github2" in project && (project as { github2?: string | null }).github2 && (
                    <a
                      href={(project as { github2?: string | null }).github2!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver front-end de ${project.title}`}
                      title="Front-end"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Ver demo de ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
