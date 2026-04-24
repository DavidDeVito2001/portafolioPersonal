"use client"

import { useLanguage } from "@/components/language-provider"
import { Languages } from "lucide-react"

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center gap-1 rounded-md border border-border bg-secondary px-1 py-1 font-mono text-xs ${
        compact ? "" : "ml-2"
      }`}
    >
      <Languages className="h-3.5 w-3.5 text-muted-foreground ml-1" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`px-2 py-0.5 rounded transition-colors ${
          lang === "es"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        {t.language.es}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-0.5 rounded transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-muted-foreground hover:text-primary"
        }`}
      >
        {t.language.en}
      </button>
    </div>
  )
}
