"use client"

import { ChevronDown, FileDown, ArrowRight, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { TypingTerminal } from "@/components/typing-terminal"

export function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-8 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>{"~/portfolio"}</span>
          <span className="text-primary">$</span>
          <span>{"whoami"}</span>
        </div>

        <h1 className="terminal-flicker text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] text-balance">
          David <span className="text-primary glow-text">De Vito</span>
          <br />
          <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-3 block">
            {t.hero.role}
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.hero.tagline}
        </p>

        {/* Typing terminal */}
        <div className="mt-10 mx-auto max-w-2xl">
          <div className="bg-secondary border border-border rounded-lg p-4 md:p-5 shadow-[0_0_30px_-10px_rgba(0,255,136,0.25)]">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground font-mono text-xs">
              <span className="h-3 w-3 rounded-full bg-destructive" />
              <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="ml-2">ddv@portfolio: ~</span>
            </div>
            <TypingTerminal key={lang} blocks={t.hero.terminal} />
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-6 py-3 rounded-md hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_rgba(0,255,136,0.6)] transition-all"
          >
            <ArrowRight className="h-4 w-4" />
            {t.hero.ctaProjects}
          </a>
          <a
            href="/cv-david-de-vito.pdf"
            download
            className="inline-flex items-center gap-2 border border-primary/40 bg-primary/5 text-primary font-mono text-sm font-semibold px-6 py-3 rounded-md hover:bg-primary/10 hover:border-primary transition-colors"
          >
            <FileDown className="h-4 w-4" />
            {t.hero.ctaCv}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-sm px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
