import { Server, Workflow, Database, Zap } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Back-end",
    description: "APIs REST robustas con Python (FastAPI) y Node.js (Express).",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Modelado y consultas en PostgreSQL, MongoDB y SQL.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Scripts y flujos inteligentes con Python, Apps Script y Docker.",
  },
  {
    icon: Zap,
    title: "Resolución de Problemas",
    description: "Enfoque analítico para encontrar soluciones eficientes a desafíos complejos.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">{"01."}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre Mí</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4">
            <div className="bg-secondary border border-border rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="ml-2">about.md</span>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  <span className="text-primary">{">"}</span>{" "}
                  Soy Técnico en Desarrollo de Software y actualmente estoy cursando
                  el último año de la Licenciatura en Gestión de Tecnología en la
                  Universidad Nacional de La Matanza.
                </p>
                <p className="mb-3">
                  <span className="text-primary">{">"}</span>{" "}
                  Me apasiona el desarrollo back-end y la resolución de problemas.
                  Disfruto creando soluciones que automatizan procesos y simplifican
                  el trabajo cotidiano de los equipos.
                </p>
                <p>
                  <span className="text-primary">{">"}</span>{" "}
                  Soy responsable y exigente con cada proyecto que encaro, buscando
                  siempre entregar código limpio, eficiente y bien documentado.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-secondary border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
