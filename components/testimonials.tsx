"use client"

import { Star, BadgeCheck, ExternalLink, Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const WORKANA_URL =
  "https://www.workana.com/freelancer/437cc119618fe4e29dcd802b65cc8825"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index={t.testimonials.sectionIndex}
          title={t.testimonials.title}
          className="mb-4"
        />

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {t.testimonials.subtitle}
          </span>
          <a
            href={WORKANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/5 px-2.5 py-1 font-mono text-xs text-signal transition-colors hover:bg-signal/10"
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            {t.testimonials.verifiedBadge}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item, idx) => (
            <Reveal key={item.client} delay={idx * 120}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-signal/40">
                <div className="mb-4 flex items-center justify-between">
                  <Quote className="h-5 w-5 text-signal" />
                  <div
                    className="flex items-center gap-0.5"
                    aria-label="5 de 5 estrellas"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="flex-1 text-sm italic leading-relaxed text-bone/90">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-5 border-t border-line pt-4">
                  <div className="text-sm font-semibold text-bone">
                    {item.client}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {item.project}
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
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-signal"
          >
            {t.testimonials.viewProfile}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
