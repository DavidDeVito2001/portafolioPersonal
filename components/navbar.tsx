"use client"

import { useState } from "react"
import { Menu, X, Terminal } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Sobre Mi" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Estudios" },
  { href: "#contact", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary font-mono text-lg font-bold">
          <Terminal className="h-5 w-5" />
          <span>{"ddv.dev"}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
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

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
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
          </ul>
        </div>
      )}
    </nav>
  )
}
