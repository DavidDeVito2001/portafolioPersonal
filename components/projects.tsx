"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import {
  Github,
  ExternalLink,
  Users,
  Lock,
  Globe,
  Server,
  Workflow,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

type Group = "web" | "backend" | "automation"

// `size` define el RITMO VISUAL del bento, NO la importancia: los proyectos con
// thumbnail más horizontal ocupan ancho doble (`wide`), los más cuadrados van en
// celda chica (`normal`). El mix de wide está repartido entre categorías y entre
// proyectos con y sin captura, justamente para que no se lea como un ranking.
type Size = "wide" | "normal"

type ProjectId =
  | "visage"
  | "mapa"
  | "lorena"
  | "alquimia"
  | "casos"
  | "mystery"
  | "avanti"
  | "boostup"
  | "normalizer"
  | "social"
  | "leadgen"
  | "whatsapp"

type ProjectMeta = {
  id: ProjectId
  group: Group
  size: Size
  tags: string[]
  demo?: string
  github?: string
  github2?: string
  image?: string
  team?: boolean
  privateApp?: boolean
}

const projectsMeta: ProjectMeta[] = [
  // ── Web & Apps ──────────────────────────────────────────────
  {
    id: "visage",
    group: "web",
    size: "wide",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "ES/EN"],
    demo: "https://www.visagebsas.com.ar/",
    image: "/projects/visage.webp",
  },
  {
    id: "mapa",
    group: "web",
    size: "normal",
    tags: ["Next.js", "Leaflet", "Gemini AI", "Google Cloud"],
    demo: "https://mapa-barridos-2q6zxui6ga-rj.a.run.app/",
    image: "/projects/mapa-barridos.webp",
  },
  {
    id: "lorena",
    group: "web",
    size: "normal",
    tags: ["WordPress", "ES/EN"],
    demo: "https://lorenadanan.wordpress.com/",
    image: "/projects/lorena-danan.webp",
  },
  {
    id: "alquimia",
    group: "web",
    size: "wide",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "https://alquimialuzysombra.github.io/alquimialuzysombra/",
    github: "https://github.com/alquimialuzysombra/alquimialuzysombra",
    image: "/projects/alquimia.webp",
  },
  {
    id: "casos",
    group: "web",
    size: "normal",
    tags: ["Python", "Flask", "Tailwind CSS", "Google Cloud"],
    demo: "https://trading-agencia-api-1020814813634.southamerica-east1.run.app/login",
    image: "/projects/trading-agencia.webp",
    privateApp: true,
  },
  {
    id: "mystery",
    group: "web",
    size: "normal",
    tags: ["Apps Script", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/DavidDeVito2001/MODO-formulario",
  },
  {
    id: "avanti",
    group: "web",
    size: "wide",
    tags: ["Node.js", "React", "MongoDB", "Express"],
    github: "https://github.com/No-Country-simulation/S20-17-webapp",
    team: true,
  },
  {
    id: "boostup",
    group: "web",
    size: "normal",
    tags: ["Node.js", "React", "Express", "MongoDB"],
    github: "https://github.com/No-Country-simulation/c21-21-m-node-react",
    team: true,
  },
  // ── Back-end & APIs ─────────────────────────────────────────
  {
    id: "normalizer",
    group: "backend",
    size: "wide",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/DavidDeVito2001/AmexDirecciones",
    github2: "https://github.com/DavidDeVito2001/AmexDireccionesFrontend",
  },
  // ── Automatizaciones ────────────────────────────────────────
  {
    id: "social",
    group: "automation",
    size: "wide",
    tags: ["n8n", "Make", "OpenAI", "Google Sheets"],
    image: "/projects/n8n-redes.webp",
  },
  {
    id: "leadgen",
    group: "automation",
    size: "normal",
    tags: ["Make", "Google Maps", "OpenAI", "Email"],
  },
  {
    id: "whatsapp",
    group: "automation",
    size: "normal",
    tags: ["Make", "WhatsApp", "Webhooks"],
  },
]

const groupIcon: Record<Group, typeof Globe> = {
  web: Globe,
  backend: Server,
  automation: Workflow,
}

type FilterKey = "all" | Group
const groupOrder: Group[] = ["web", "backend", "automation"]

const EASE = [0.16, 1, 0.3, 1] as const
const STAGGER = 0.06 // ~60ms entre cards

export function Projects() {
  const { t } = useLanguage()
  const labels = t.projects.filters
  const [active, setActive] = useState<FilterKey>("all")

  const presentGroups = groupOrder.filter((g) =>
    projectsMeta.some((p) => p.group === g),
  )
  const filterKeys: FilterKey[] = ["all", ...presentGroups]
  const shown =
    active === "all"
      ? projectsMeta
      : projectsMeta.filter((p) => p.group === active)

  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index={t.projects.sectionIndex}
          title={t.projects.title}
          className="mb-8"
        />

        {/* Filtros — sutiles, tipo tabs con subrayado deslizante */}
        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2">
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative pb-1.5 text-xs font-medium tracking-wide transition-colors ${
                active === key
                  ? "text-bone"
                  : "text-muted-foreground hover:text-bone"
              }`}
            >
              {labels[key]}
              {active === key && (
                <motion.span
                  layoutId="project-filter-underline"
                  className="absolute inset-x-0 -bottom-px h-px bg-signal"
                  transition={{ duration: 0.3, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-3 [grid-auto-flow:dense]">
          <AnimatePresence>
            {shown.map((meta, i) => (
              <ProjectCard key={meta.id} meta={meta} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ meta, index }: { meta: ProjectMeta; index: number }) {
  const { t } = useLanguage()
  const copy = t.projects.items[meta.id]
  const Icon = groupIcon[meta.group]

  const reduce = useReducedMotion()

  // Revelado del detalle:
  // - Desktop: hover puro de CSS (`group-hover`) → nunca queda pegado.
  // - Teclado: `group-focus-within` al enfocar un link interno.
  // - Touch (sin hover): el tap togglea `tapped` → marca la card con `.is-open`.
  // El click sólo controla el detalle en dispositivos SIN hover, así en
  // desktop no se "pinea" nada y se respeta el hover.
  const [tapped, setTapped] = useState(false)
  const handleClick = () => {
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover)").matches
    ) {
      setTapped((v) => !v)
    }
  }

  return (
    // El <article> maneja el reflow al filtrar (`layout`) y el fundido de
    // salida; la opacidad de filtro no choca con `layout`.
    <motion.article
      layout={reduce ? false : "position"}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      onClick={handleClick}
      aria-label={copy.title}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border border-line bg-surface ${
        tapped ? "is-open" : ""
      } ${meta.size === "wide" ? "sm:col-span-2" : ""}`}
    >
      {/* Reveal on-scroll (fade + 10px) en un wrapper SIN layout, para no chocar
          con la proyección de `layout` del <article>. */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{
          duration: 0.5,
          ease: EASE,
          delay: reduce ? 0 : Math.min(index, 8) * STAGGER,
        }}
      >
      {/* Thumbnail real o tratamiento gráfico limpio */}
      <div className="absolute inset-0">
        {meta.image ? (
          <img
            src={meta.image}
            alt={copy.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <Graphic Icon={Icon} />
        )}
      </div>

      {/* Badges */}
      {(meta.team || meta.privateApp) && (
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          {meta.team && (
            <span className="inline-flex items-center gap-1 rounded-full bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-signal backdrop-blur-sm">
              <Users className="h-3 w-3" />
              {t.projects.teamBadge}
            </span>
          )}
          {meta.privateApp && (
            <span className="inline-flex items-center gap-1 rounded-full bg-ink/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
              <Lock className="h-3 w-3" />
              {t.projects.privateBadge}
            </span>
          )}
        </div>
      )}

      {/* Estado compacto: título + tags sobre un velo inferior.
          Se oculta en hover / focus-within / tap (touch). */}
      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-4 pt-12 opacity-100 transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-focus-within:opacity-0 group-[.is-open]:opacity-0"
      >
        <h3 className="font-display text-base font-semibold text-bone">
          {copy.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {meta.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-line bg-ink/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Panel de info: aparece al hover / focus-within / tap (touch). */}
      <div
        className="absolute inset-0 flex flex-col gap-2 bg-ink/95 p-5 backdrop-blur-sm opacity-0 translate-y-2 pointer-events-none transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto group-[.is-open]:opacity-100 group-[.is-open]:translate-y-0 group-[.is-open]:pointer-events-auto"
      >
        <h3 className="font-display text-base font-semibold text-signal">
          {copy.title}
        </h3>

        <div className="space-y-1.5 text-xs">
          <p className="line-clamp-2">
            <span className="font-mono text-signal">
              {t.projects.problemLabel}:
            </span>{" "}
            <span className="text-muted-foreground">{copy.problem}</span>
          </p>
          <p className="line-clamp-2">
            <span className="font-mono text-signal">
              {t.projects.impactLabel}:
            </span>{" "}
            <span className="text-muted-foreground">{copy.impact}</span>
          </p>
        </div>

        <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground">
          {copy.description}
        </p>

        <div className="flex items-center gap-3 pt-1">
          {meta.demo && (
            <CardLink
              href={meta.demo}
              label={`Demo — ${copy.title}`}
              text="Demo"
              Icon={ExternalLink}
            />
          )}
          {meta.github && (
            <CardLink
              href={meta.github}
              label={`${meta.github2 ? "Back-end" : "GitHub"} — ${copy.title}`}
              text={meta.github2 ? "Back-end" : "Código"}
              Icon={Github}
            />
          )}
          {meta.github2 && (
            <CardLink
              href={meta.github2}
              label={`Front-end — ${copy.title}`}
              text="Front-end"
              Icon={Github}
            />
          )}
        </div>
      </div>
     </motion.div>
    </motion.article>
  )
}

function CardLink({
  href,
  label,
  text,
  Icon,
}: {
  href: string
  label: string
  text: string
  Icon: typeof Globe
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={label}
      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-signal"
    >
      <Icon className="h-4 w-4" />
      {text}
    </a>
  )
}

/** Tratamiento gráfico para proyectos sin captura (intencional, no "imagen faltante"). */
function Graphic({ Icon }: { Icon: typeof Globe }) {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-surface-2 to-ink">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(91,141,239,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="h-12 w-12 text-signal/30" />
      </div>
    </div>
  )
}
