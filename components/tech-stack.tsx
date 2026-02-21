"use client"

const stackCategories = [
  {
    title: "Lenguajes",
    items: [
      { name: "Python", icon: "PY" },
      { name: "JavaScript", icon: "JS" },
      { name: "HTML", icon: "HT" },
      { name: "CSS", icon: "CS" },
      { name: "SQL", icon: "SQ" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "FastAPI", icon: "FA" },
      { name: "Express", icon: "EX" },
      { name: "Nest.js", icon: "NX" },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: "PG" },
      { name: "MongoDB", icon: "MG" },
      { name: "SQL", icon: "SQ" },
    ],
  },
  {
    title: "DevOps & Herramientas",
    items: [
      { name: "Docker", icon: "DK" },
      { name: "Kubernetes", icon: "K8" },
      { name: "Vercel", icon: "VC" },
      { name: "Git/GitHub", icon: "GT" },
      { name: "Apps Script", icon: "AS" },
      { name: "Postman", icon: "PM" },
      { name: "JWT", icon: "JW" },
      { name: "Jira", icon: "JR" },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">{"04."}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Stack Técnico
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 bg-secondary border border-border rounded-md p-3 hover:border-primary/40 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-md bg-background border border-border flex items-center justify-center font-mono text-xs text-primary font-bold group-hover:bg-primary/10 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm text-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
