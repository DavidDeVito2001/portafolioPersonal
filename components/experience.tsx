const experiences = [
  {
    role: "Desarrollador Back-end & Automatizaciones",
    company: "TradingPos",
    period: "Mar 2025 - Presente",
    description:
      "Soluciono problemas cotidianos mediante scripts y automatizaciones utilizando Apps Script y Python. Lideré el desarrollo de un sistema de normalización y verificación de direcciones que procesa archivos Excel en lote, valida contra bases de datos locales (OSM) y APIs de Google, y geocodifica direcciones automáticamente.",
    tags: ["Python", "FastAPI", "Apps Script", "Docker", "HTML/CSS/JS"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">{"02."}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experiencia Laboral
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                <div className="bg-secondary border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-mono text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-background border border-border px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
