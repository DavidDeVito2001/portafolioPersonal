"use client"

import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index={t.education.sectionIndex} title={t.education.title} />

        <div className="grid md:grid-cols-2 gap-4">
          {t.education.items.map((item, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-surface p-5 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-signal/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-signal/10 text-signal">
                  {item.type === "degree" ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug text-bone">
                    {"link" in item && item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-signal"
                      >
                        {item.title} ↗
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.institution}
                  </p>
                  <span className="mt-1 inline-block font-mono text-xs text-signal">
                    {item.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
