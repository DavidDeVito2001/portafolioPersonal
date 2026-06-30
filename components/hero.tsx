"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, FileDown, ArrowRight, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false })

// dpr capeado para no fundir GPUs de gama media
const BEAMS_DPR: [number, number] = [1, 1.5]

export function Hero() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  // ¿Corre Beams en este dispositivo? (perf + a11y)
  // No cargamos three.js en mobile ni con prefers-reduced-motion.
  const [enabled, setEnabled] = useState(false)
  // Pausar la animación cuando el hero sale del viewport.
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    setEnabled(!reduce && !isMobile)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Fondo estático (fallback + backdrop mientras Beams carga) */}
      <div
        className="absolute inset-0 z-0 bg-ink"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 50% -10%, rgba(91,141,239,0.18), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Beams animado — sólo en desktop sin reduced-motion */}
      {enabled && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#5B8DEF"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
            paused={!inView}
            dpr={BEAMS_DPR}
          />
        </div>
      )}

      {/* Overlay de legibilidad */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Disponibilidad + rol */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-bone backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.available}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.hero.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-bone leading-[1.05] text-balance">
          {t.hero.headlinePre}
          <span className="text-signal">{t.hero.headlineAccent}</span>
          {t.hero.headlinePost}
        </h1>

        {/* Lead */}
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          <strong className="font-semibold text-bone">{t.hero.leadStrong}</strong>
          {t.hero.leadRest}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-signal-strong"
          >
            <ArrowRight className="h-4 w-4" />
            {t.hero.ctaProjects}
          </a>
          <a
            href="/cv-david-de-vito.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-signal"
          >
            <FileDown className="h-4 w-4" />
            {t.hero.ctaCv}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-signal"
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact}
          </a>
        </div>

      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-signal animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
