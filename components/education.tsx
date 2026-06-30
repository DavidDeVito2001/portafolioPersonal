"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

const EASE = [0.16, 1, 0.3, 1] as const

// Orquestación por item: el nodo enciende primero, luego el contenido y la
// fecha, con un stagger corto. Todo se dispara una vez (whileInView once).
const rowV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
}
// Nodos: pop de escala sin rebote. Los títulos formales arrancan más chicos
// (pop más notorio) que las certificaciones.
const nodeDegreeV: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
}
const nodeCertV: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
}
// Contenido: fade + 10px hacia arriba. Fecha: leve desplazamiento lateral.
const contentV: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}
const dateV: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

export function Education() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)

  // La línea se "dibuja" atada al progreso de scroll de la sección.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 35%"],
  })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const items = t.education.items
  const degrees = items.filter((i) => i.type === "degree")
  const certs = items.filter((i) => i.type === "cert")

  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          index={t.education.sectionIndex}
          title={t.education.title}
        />

        <div ref={trackRef} className="relative">
          {/* Riel base (estructura, siempre visible) */}
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px -translate-x-1/2 bg-line"
          />
          {/* Riel dibujado por scroll (estático una vez trazado) */}
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : lineScaleY }}
            className="absolute left-4 top-2 bottom-2 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-signal/60 via-signal/40 to-signal/10"
          />

          <ul className="relative">
            {degrees.map((item, i) => (
              <TimelineItem
                key={`degree-${i}`}
                item={item}
                emphasis
                reduce={reduce}
              />
            ))}

            {/* Sub-grupo: certificaciones (peso secundario) */}
            <motion.li
              className="grid grid-cols-[32px_1fr] gap-x-4 pb-4 pt-2 sm:gap-x-5"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                {t.education.certsLabel}
              </span>
            </motion.li>

            {certs.map((item, i) => (
              <TimelineItem key={`cert-${i}`} item={item} reduce={reduce} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  emphasis = false,
  reduce,
}: {
  item: { type: string; title: string; institution: string; year: string } & {
    link?: string
  }
  emphasis?: boolean
  reduce: boolean | null
}) {
  const link = "link" in item ? item.link : undefined

  return (
    <motion.li
      className="group grid grid-cols-[32px_1fr] gap-x-4 sm:gap-x-5"
      variants={rowV}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {/* Nodo sobre la línea (ring del color de fondo para tapar el riel) */}
      <div className="flex justify-center">
        {emphasis ? (
          <motion.span
            variants={nodeDegreeV}
            className="relative z-10 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-signal text-ink ring-4 ring-ink"
          >
            <GraduationCap className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            variants={nodeCertV}
            className="relative z-10 mt-[7px] h-2.5 w-2.5 rounded-full bg-faint ring-4 ring-ink transition-colors group-hover:bg-signal"
          />
        )}
      </div>

      {/* Contenido */}
      <div className={emphasis ? "pb-10" : "pb-6"}>
        <motion.h3
          variants={contentV}
          className={
            emphasis
              ? "font-display text-base font-semibold leading-snug text-bone sm:text-lg"
              : "text-sm font-medium leading-snug text-muted-foreground"
          }
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              {item.title} ↗
            </a>
          ) : (
            <span
              className={
                emphasis
                  ? "transition-colors group-hover:text-signal"
                  : "transition-colors group-hover:text-bone"
              }
            >
              {item.title}
            </span>
          )}
        </motion.h3>

        <motion.p
          variants={contentV}
          className={
            emphasis
              ? "mt-1 text-sm text-muted-foreground"
              : "mt-0.5 text-xs text-faint"
          }
        >
          {item.institution}
        </motion.p>

        <motion.span
          variants={dateV}
          className={`mt-1.5 inline-block font-mono ${
            emphasis ? "text-xs text-signal" : "text-[11px] text-muted-foreground"
          }`}
        >
          {item.year}
        </motion.span>
      </div>
    </motion.li>
  )
}
