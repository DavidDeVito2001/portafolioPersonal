"use client"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function Experience() {
  const { t } = useLanguage()
  const tp = t.experience.tradingpos
  const tags = ["Python", "FastAPI", "Apps Script", "Docker", "PostgreSQL", "JWT"]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index={t.experience.sectionIndex} title={t.experience.title} />

        <div className="relative">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-line"
            aria-hidden="true"
          />

          <div className="space-y-12">
            <Reveal>
              <div className="relative pl-12 md:pl-20">
                <div className="absolute left-[11px] md:left-[27px] top-2 h-3 w-3 rounded-full border-2 border-signal bg-ink" />

                <div className="rounded-xl border border-line bg-surface p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-signal/40">
                  <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-bone">
                        {tp.role}
                      </h3>
                      <p className="font-mono text-sm text-signal">
                        {tp.company}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs text-muted-foreground">
                      {tp.period}
                    </span>
                  </div>

                  <ul className="mb-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {tp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-signal/10 px-2.5 py-1 font-mono text-xs text-signal"
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
