"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const SOCIALS = [
  {
    href: "https://github.com/DavidDeVito2001",
    label: "GitHub",
    Icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/david-devito-backend/",
    label: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  {
    href: "mailto:daviddevito01@gmail.com",
    label: "Email",
    Icon: Mail,
    external: false,
  },
] as const

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <a
            href="#"
            className="font-display text-base font-bold tracking-tight text-bone transition-colors hover:text-signal"
          >
            David De Vito<span className="text-signal">.</span>
          </a>
          <p className="mt-1 text-xs text-muted-foreground">{t.footer.builtWith}</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          {SOCIALS.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-signal"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} David De Vito
        </p>
      </div>
    </footer>
  )
}
