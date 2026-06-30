"use client"

import { Server, Workflow, Database } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

const EASE = [0.16, 1, 0.3, 1] as const

export function About() {
  const { t } = useLanguage()
  const h = t.about.highlights
  const reduce = useReducedMotion()

  const highlights = [
    { icon: Server, ...h.backend },
    { icon: Database, ...h.db },
    { icon: Workflow, ...h.auto },
  ]

  // Reveal consistente con el resto del sitio: fade + 10px, una sola vez.
  const reveal = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -80px 0px" },
    transition: { duration: 0.5, ease: EASE, delay: reduce ? 0 : delay },
  })

  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index={t.about.sectionIndex} title={t.about.title} />

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Narrativa — protagonista, con aire e interlineado amplio */}
          <motion.div
            {...reveal(0)}
            className="space-y-5 text-[15px] leading-[1.75] text-muted-foreground md:text-base"
          >
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
          </motion.div>

          {/* Tres cards apiladas: balanceadas, sin hueco de la cuarta */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                {...reveal(0.12 + i * 0.06)}
                className="group flex gap-4 rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-signal/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-signal/5 text-muted-foreground transition-colors duration-300 group-hover:bg-signal/10 group-hover:text-signal">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
