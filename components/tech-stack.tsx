"use client"

import { useState } from "react"
import { motion, useReducedMotion, type Variants } from "motion/react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

// ── Curaduría ────────────────────────────────────────────────
// Agrupación con criterio real (no HTML/CSS como "lenguajes", no Postman/JWT
// en DevOps). Menos items, bien elegidos. `core` = lo que domina → más peso.
type Level = "core"
type Row = {
  key: "backend" | "data" | "infra" | "frontend" | "automation" | "tooling"
  accessory?: boolean // fila accesoria → todo más chico y tenue
  techs: { name: string; level?: Level }[]
}

const ROWS: Row[] = [
  {
    key: "backend",
    techs: [
      { name: "Python", level: "core" },
      { name: "FastAPI", level: "core" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Nest.js" },
    ],
  },
  {
    key: "data",
    techs: [
      { name: "PostgreSQL", level: "core" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    key: "infra",
    techs: [
      { name: "Docker", level: "core" },
      { name: "Kubernetes" },
      { name: "Google Cloud" },
      { name: "Vercel" },
    ],
  },
  {
    key: "frontend",
    techs: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
    ],
  },
  {
    key: "automation",
    techs: [
      { name: "n8n", level: "core" },
      { name: "Make", level: "core" },
      { name: "Apps Script" },
    ],
  },
  {
    key: "tooling",
    accessory: true,
    techs: [
      { name: "Git" },
      { name: "Postman" },
      { name: "JWT" },
      { name: "Jira" },
    ],
  },
]

// Índice global secuencial para el stagger (label + cada tech, en orden).
let _seq = 0
const ROWS_SEQ = ROWS.map((row) => ({
  ...row,
  labelIndex: _seq++,
  techs: row.techs.map((t) => ({ ...t, index: _seq++ })),
}))

const EASE = [0.16, 1, 0.3, 1] as const // ease-out-expo
const STAGGER = 0.06 // ~60ms entre items

function techClass(level: Level | undefined, accessory?: boolean) {
  if (accessory) return "text-sm text-faint"
  if (level === "core") return "text-lg font-medium text-bone md:text-xl"
  return "text-base text-muted-foreground"
}

export function TechStack() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  // Tech enfocada en hover → las demás bajan opacidad.
  const [active, setActive] = useState<string | null>(null)

  const container: Variants = { hidden: {}, show: {} }
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 10 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.2 }
        : { duration: 0.5, ease: EASE, delay: i * STAGGER },
    }),
  }

  return (
    <section id="stack" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index={t.stack.sectionIndex} title={t.stack.title} />

        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {ROWS_SEQ.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-line py-5 md:grid-cols-[160px_1fr]"
            >
              {/* Categoría — tenue, uppercase, tracking amplio */}
              <motion.div
                variants={item}
                custom={row.labelIndex}
                className="pt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
              >
                {t.stack.categories[row.key]}
              </motion.div>

              {/* Tecnologías inline */}
              <div className="flex flex-wrap items-baseline">
                {row.techs.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    variants={item}
                    custom={tech.index}
                    className="inline-flex items-baseline"
                  >
                    {i > 0 && (
                      <span
                        className="mx-2.5 select-none text-line"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}
                    <span
                      onMouseEnter={() => setActive(tech.name)}
                      onMouseLeave={() => setActive(null)}
                      className={`cursor-default transition-opacity duration-300 ${techClass(
                        tech.level,
                        row.accessory,
                      )} ${
                        active && active !== tech.name
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
