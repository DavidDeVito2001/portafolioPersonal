import { GraduationCap, Award } from "lucide-react"

const education = [
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
    title: "Engineering Warrior Training - Hard Challenges",
    institution: "Programación Estructurada, Pensamiento Crítico, Programación Lógica",
    year: "Certificado",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">{"05."}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Estudios
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-secondary border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                {item.type === "degree" ? (
                  <GraduationCap className="h-5 w-5 text-primary" />
                ) : (
                  <Award className="h-5 w-5 text-primary" />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground leading-snug">
                  {"link" in item && (item as { link?: string }).link ? (
                    <a
                      href={(item as { link?: string }).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.title} ↗
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.institution}
                </p>
                <span className="text-xs font-mono text-primary mt-1 inline-block">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
