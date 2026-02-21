import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          <span className="text-primary">{">"}</span> Construido con Next.js, Tailwind CSS y Shadcn/UI
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DavidDeVito2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-devito-backend/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:daviddevito01@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} David De Vito
        </p>
      </div>
    </footer>
  )
}
