"use client"

import { useState } from "react"
import { Github, ExternalLink, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

type Category = "backend" | "fullstack" | "automation"

type ProjectMeta = {
  id: "normalizer" | "avanti" | "mystery" | "boostup"
  categories: Category[]
  tags: string[]
  github: string
  github2?: string
  team?: boolean
}

const projectsMeta: ProjectMeta[] = [
  {
    id: "normalizer",
    categories: ["backend", "automation"],
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/DavidDeVito2001/AmexDirecciones",
    github2: "https://github.com/DavidDeVito2001/AmexDireccionesFrontend",
  },
  {
    id: "avanti",
    categories: ["fullstack"],
    tags: ["Node.js", "React", "MongoDB", "Express"],
    github: "https://github.com/No-Country-simulation/S20-17-webapp",
    team: true,
  },
  {
    id: "mystery",
    categories: ["automation", "fullstack"],
    tags: ["Apps Script", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/DavidDeVito2001/MODO-formulario",
  },
  {
    id: "boostup",
    categories: ["fullstack"],
    tags: ["Node.js", "React", "Express", "MongoDB"],
    github: "https://github.com/No-Country-simulation/c21-21-m-node-react",
    team: true,
  },
]

type FilterKey = "all" | Category

const filters: Array<{ key: FilterKey; labelKey: "all" | Category }> = [
  { key: "all", labelKey: "all" },
  { key: "backend", labelKey: "backend" },
  { key: "fullstack", labelKey: "fullstack" },
  { key: "automation", labelKey: "automation" },
]

export function Projects() {
  const { t } = useLanguage()
  const labels = t.projects.filters
  const [active, setActive] = useState<FilterKey>("all")

  const visible = projectsMeta.filter(
    (p) => active === "all" || p.categories.includes(active),
  )

  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-primary font-mono text-sm">
            {t.projects.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.projects.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                active === f.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {active === f.key && <span className="mr-1">{">"}</span>}
              {labels[f.labelKey]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((meta, i) => {
            const copy = t.projects.items[meta.id]
            return (
              <Reveal key={meta.id} delay={(i % 4) * 80}>
                <div className="group h-full bg-secondary border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-[0_0_25px_-12px_rgba(0,255,136,0.55)] transition-all flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary font-mono text-2xl">
                      {"{ }"}
                    </div>
                    <div className="flex items-center gap-3">
                      {meta.team && (
                        <span
                          title={t.projects.teamBadge}
                          className="inline-flex items-center gap-1 text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                        >
                          <Users className="h-3 w-3" />
                          {t.projects.teamBadge}
                        </span>
                      )}
                      <a
                        href={meta.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`GitHub — ${copy.title}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {meta.github2 && (
                        <a
                          href={meta.github2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Front-end — ${copy.title}`}
                          title="Front-end"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {copy.title}
                  </h3>

                  <div className="space-y-2 font-mono text-xs mb-4">
                    <div>
                      <span className="text-primary">
                        {t.projects.problemLabel}:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {copy.problem}
                      </span>
                    </div>
                    <div>
                      <span className="text-primary">
                        {t.projects.impactLabel}:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {copy.impact}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {copy.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-muted-foreground bg-background border border-border px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
