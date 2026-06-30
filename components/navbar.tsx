"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "testimonials", key: "testimonials" },
  { id: "stack", key: "stack" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")
  const { t } = useLanguage()

  // Sombra/borde sutil al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scrollspy: resalta la sección visible
  useEffect(() => {
    const els = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (els.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-ink/85 border-b border-line"
          : "bg-ink/50 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-bone shrink-0 transition-colors hover:text-signal"
          aria-label="David De Vito — inicio"
        >
          David De Vito<span className="text-signal">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors ${
                    isActive ? "text-signal" : "text-muted-foreground hover:text-bone"
                  }`}
                >
                  {t.nav[item.key]}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-signal" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden rounded-md p-1 text-bone transition-colors hover:text-signal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-md">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-md py-2 px-3 text-sm transition-colors ${
                      isActive
                        ? "bg-surface text-signal"
                        : "text-muted-foreground hover:bg-surface hover:text-bone"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              )
            })}
            <li className="sm:hidden pt-3 px-3">
              <LanguageToggle compact />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
