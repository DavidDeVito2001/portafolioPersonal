"use client"

import { useState } from "react"
import { Menu, X, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#stack", label: t.nav.stack },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-primary font-mono text-lg font-bold shrink-0">
          <Terminal className="h-5 w-5" />
          <span>{"ddv.dev"}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary mr-2">{">"}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden pt-3 px-3">
              <LanguageToggle compact />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
