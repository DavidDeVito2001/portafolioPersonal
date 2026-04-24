"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

const mainCategories = [
  {
    key: "languages" as const,
    items: [
      { name: "Python", icon: "PY" },
      { name: "JavaScript", icon: "JS" },
      { name: "HTML", icon: "HT" },
      { name: "CSS", icon: "CS" },
      { name: "SQL", icon: "SQ" },
    ],
  },
  {
    key: "frameworks" as const,
    items: [
      { name: "FastAPI", icon: "FA" },
      { name: "Express", icon: "EX" },
      { name: "Nest.js", icon: "NX" },
    ],
  },
  {
    key: "databases" as const,
    items: [
      { name: "PostgreSQL", icon: "PG" },
      { name: "MongoDB", icon: "MG" },
      { name: "Redis", icon: "RD" },
    ],
  },
  {
    key: "devops" as const,
    items: [
      { name: "Docker", icon: "DK" },
      { name: "Kubernetes", icon: "K8" },
      { name: "Google Cloud", icon: "GC" },
      { name: "Vercel", icon: "VC" },
      { name: "Git/GitHub", icon: "GT" },
      { name: "Postman", icon: "PM" },
      { name: "JWT", icon: "JW" },
      { name: "Jira", icon: "JR" },
    ],
  },
]

const automationItems = [
  { name: "n8n", icon: "N8", description: "Workflow automation" },
  { name: "Make.com", icon: "MK", description: "No-code integrations" },
  { name: "Apps Script", icon: "AS", description: "Google Workspace" },
]

function useColumnReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}

function StackColumn({
  category,
  label,
  colDelay = 0,
}: {
  category: { key: string; items: { name: string; icon: string }[] }
  label: string
  colDelay?: number
}) {
  const { ref, visible } = useColumnReveal()

  return (
    <div ref={ref}>
      <h3 className="text-xs font-mono text-primary mb-4 uppercase tracking-widest">
        {label}
      </h3>
      <div className="space-y-2.5">
        {category.items.map((item, i) => (
          <div
            key={item.name}
            style={{
              transitionDelay: visible ? `${colDelay + i * 50}ms` : "0ms",
              transitionDuration: "450ms",
            }}
            className={`stack-card group flex items-center gap-3 bg-secondary border border-border rounded-md p-3 hover:border-primary/50 hover:shadow-[0_0_16px_-6px_rgba(0,255,136,0.4)] transition-all cursor-default ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="stack-icon h-10 w-10 rounded-md bg-background border border-border flex items-center justify-center font-mono text-xs text-primary font-bold shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
              {item.icon}
            </div>
            <span className="text-sm text-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">
            {t.stack.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.stack.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Main 4-column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {mainCategories.map((cat, i) => (
            <StackColumn
              key={cat.key}
              category={cat}
              label={t.stack.categories[cat.key]}
              colDelay={i * 60}
            />
          ))}
        </div>

        {/* Automation featured row */}
        <Reveal delay={100}>
          <div className="bg-secondary border border-primary/25 rounded-xl p-6 relative overflow-hidden">
            {/* subtle scan background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #00ff88 0px, #00ff88 1px, transparent 1px, transparent 4px)",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  {t.stack.categories.automation}
                </span>
                <div className="flex-1 h-px bg-primary/20" />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {"// workflows · no-code · integrations"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {automationItems.map((item, i) => (
                  <AutomationCard key={item.name} item={item} delay={i * 80} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AutomationCard({
  item,
  delay,
}: {
  item: { name: string; icon: string; description: string }
  delay: number
}) {
  const { ref, visible } = useColumnReveal()

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionDuration: "500ms",
      }}
      className={`stack-card group flex items-center gap-4 bg-background border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-[0_0_20px_-6px_rgba(0,255,136,0.45)] transition-all cursor-default ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="stack-icon h-12 w-12 rounded-lg bg-secondary border border-border flex items-center justify-center font-mono text-sm text-primary font-bold shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
        {item.icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5 font-mono">
          {item.description}
        </div>
      </div>
    </div>
  )
}
