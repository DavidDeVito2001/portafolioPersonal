"use client"

import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">
            {t.education.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.education.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {t.education.items.map((item, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="h-full flex items-start gap-4 bg-secondary border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  {item.type === "degree" ? (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  ) : (
                    <Award className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {"link" in item && item.link ? (
                      <a
                        href={item.link}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
