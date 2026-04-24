"use client"

import { Star, BadgeCheck, ExternalLink, Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

const WORKANA_URL =
  "https://www.workana.com/freelancer/437cc119618fe4e29dcd802b65cc8825"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-primary font-mono text-sm">
            {t.testimonials.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.testimonials.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-sm text-muted-foreground">
            {t.testimonials.subtitle}
          </span>
          <a
            href={WORKANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-primary border border-primary/40 bg-primary/5 px-2.5 py-1 rounded-full hover:bg-primary/10 transition-colors"
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            {t.testimonials.verifiedBadge}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item, idx) => (
            <Reveal key={item.client} delay={idx * 120}>
              <article className="h-full bg-secondary border border-border rounded-lg p-6 hover:border-primary/40 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-5 w-5 text-primary" />
                  <div
                    className="flex items-center gap-0.5"
                    aria-label="5 de 5 estrellas"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-foreground/90 leading-relaxed italic flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-5 pt-4 border-t border-border font-mono text-xs space-y-1">
                  <div className="text-muted-foreground">
                    <span className="text-primary mr-2">{">"}</span>
                    client: <span className="text-foreground">{item.client}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary mr-2">{">"}</span>
                    project:{" "}
                    <span className="text-foreground">{item.project}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WORKANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            {t.testimonials.viewProfile}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
