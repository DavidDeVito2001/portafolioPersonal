"use client"

import { Server, Workflow, Database, Zap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function About() {
  const { t } = useLanguage()
  const h = t.about.highlights

  const highlights = [
    { icon: Server, ...h.backend },
    { icon: Database, ...h.db },
    { icon: Workflow, ...h.auto },
    { icon: Zap, ...h.solving },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">
            {t.about.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.about.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-4">
              <div className="bg-secondary border border-border rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <span className="h-3 w-3 rounded-full bg-destructive" />
                  <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  <span className="ml-2">{t.about.fileName}</span>
                </div>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    <span className="text-primary">{">"}</span> {t.about.bio1}
                  </p>
                  <p className="mb-3">
                    <span className="text-primary">{">"}</span> {t.about.bio2}
                  </p>
                  <p>
                    <span className="text-primary">{">"}</span> {t.about.bio3}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group h-full bg-secondary border border-border rounded-lg p-5 hover:border-primary/50 hover:shadow-[0_0_20px_-10px_rgba(0,255,136,0.5)] transition-all">
                  <item.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
