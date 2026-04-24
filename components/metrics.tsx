"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Rocket, Wrench, Clock } from "lucide-react"
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
      icon: Rocket,
      value: 4,
      suffix: "+",
      label: t.metrics.projects.label,
      sub: t.metrics.projects.sub,
    },
    {
      icon: Wrench,
      value: 22,
      suffix: "+",
      label: t.metrics.techs.label,
      sub: t.metrics.techs.sub,
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
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
  suffix,
  label,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  sub: string
}) {
  const { value: v, ref } = useCountUp(value)

  return (
    <div
      ref={ref}
      className="group bg-secondary border border-border rounded-lg p-4 md:p-5 hover:border-primary/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-[10px] font-mono text-muted-foreground">
          {">_"}
        </span>
      </div>
      <div className="font-mono">
        <div className="text-2xl md:text-3xl font-bold text-foreground leading-none">
          {v}
          <span className="text-primary">{suffix}</span>
        </div>
        <div className="mt-2 text-xs text-foreground/80 leading-tight">
          {label}
        </div>
        <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
          {sub}
        </div>
      </div>
    </div>
  )
}
