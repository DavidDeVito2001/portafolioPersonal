"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl text-center">
        {/* Terminal prompt line */}
        <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-8 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span>{"~/portfolio"}</span>
          <span className="text-primary">$</span>
          <span className="cursor-blink">{"whoami"}</span>
        </div>

        <h1 className="terminal-flicker text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight text-balance">
          David{" "}
          <span className="text-primary glow-text">De Vito</span>
          <br />
          <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block">
            {"Desarrollador Back-end & Automatizaciones"}
          </span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Construyo soluciones back-end robustas y automatizo procesos para que los equipos
          se enfoquen en lo que realmente importa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            {">"} Ver Proyectos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-sm px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}
