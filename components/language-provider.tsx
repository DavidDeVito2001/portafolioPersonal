"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { dictionaries, type Lang } from "@/lib/i18n/dictionaries"

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof dictionaries)[Lang]
}

const STORAGE_KEY = "portfolio-lang"

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
      if (saved === "es" || saved === "en") {
        setLangState(saved)
        document.documentElement.lang = saved
      }
    } catch {
      /* ignore */
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
      document.documentElement.lang = l
    } catch {
      /* ignore */
    }
  }

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
