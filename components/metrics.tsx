"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Rocket, Languages, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setValue(target)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / durationMs)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, durationMs])

  return { value, ref }
}

function monthsSince(year: number, month: number) {
  const start = new Date(year, month - 1, 1)
  const now = new Date()
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  )
}

export function Metrics() {
  const { t } = useLanguage()

  const months = monthsSince(2025, 3)
  const items = [
    {
      icon: Star,
      value: 5,
      suffix: "/5",
      label: t.metrics.rating.label,
      sub: t.metrics.rating.sub,
    },
    {
      // 12 = los proyectos reales que muestra la sección Proyectos (sin "+", para
      // no contradecir lo que se ve en el sitio).
      icon: Rocket,
      value: 12,
      suffix: "",
      label: t.metrics.projects.label,
      sub: t.metrics.projects.sub,
    },
    {
      icon: Languages,
      text: "ES · EN",
      label: t.metrics.bilingual.label,
      sub: t.metrics.bilingual.sub,
    },
    {
      icon: Clock,
      value: months,
      suffix: "",
      label: t.metrics.months.label,
      sub: t.metrics.months.sub,
    },
  ]

  return (
    <section aria-label="Metrics" className="px-4 pb-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((it) => (
          <MetricCard key={it.label} {...it} />
        ))}
      </div>
    </section>
  )
}

function MetricCard({
  icon: Icon,
  value,
  suffix = "",
  text,
  label,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>
  value?: number
  suffix?: string
  text?: string
  label: string
  sub: string
}) {
  // Métricas numéricas hacen count-up; las de texto (ej. "ES · EN") se muestran fijas.
  const { value: v, ref } = useCountUp(value ?? 0)

  return (
    <div
      ref={ref}
      className="group rounded-xl border border-line bg-surface p-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-signal/40 md:p-5"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-signal/10 text-signal">
        <Icon className="h-4 w-4" />
      </div>
      <div className="font-display text-2xl font-bold leading-none text-bone md:text-3xl">
        {text ? (
          text
        ) : (
          <>
            {v}
            <span className="text-signal">{suffix}</span>
          </>
        )}
      </div>
      <div className="mt-2 text-xs leading-tight text-bone/85">{label}</div>
      <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
        {sub}
      </div>
    </div>
  )
}
