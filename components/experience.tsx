"use client"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function Experience() {
  const { t } = useLanguage()
  const tp = t.experience.tradingpos
  const tags = ["Python", "FastAPI", "Apps Script", "Docker", "PostgreSQL", "JWT"]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">
            {t.experience.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.experience.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-12">
            <Reveal>
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-[11px] md:left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_0_rgba(0,255,136,0.6)]" />

                <div className="bg-secondary border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {tp.role}
                      </h3>
                      <p className="text-primary font-mono text-sm">
                        {tp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-background border border-border px-3 py-1 rounded-full w-fit">
                      {tp.period}
                    </span>
                  </div>

                  <ul className="text-sm text-muted-foreground leading-relaxed mb-5 space-y-2">
                    {tp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-0.5 shrink-0">
                          {">"}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
