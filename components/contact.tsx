"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const CONTACT_LINKS = [
  {
    href: "mailto:daviddevito01@gmail.com",
    label: "daviddevito01@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    href: "https://github.com/DavidDeVito2001",
    label: "github.com/DavidDeVito2001",
    Icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/david-devito-backend/",
    label: "linkedin.com/in/david-devito-backend",
    Icon: Linkedin,
    external: true,
  },
] as const

export function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "b070f059-4927-4f57-b5f7-18c10b86336a")
    formData.append("subject", t.contact.emailSubject)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(t.contact.errorSend)
      }
    } catch {
      setError(t.contact.errorConn)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full rounded-md border border-line bg-ink px-4 py-2.5 text-sm text-bone placeholder:text-faint transition-colors focus:border-signal focus:outline-none"
  const labelClass = "mb-1.5 block text-xs font-medium text-muted-foreground"

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index={t.contact.sectionIndex} title={t.contact.title} />

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                {t.contact.intro}
              </p>

              <div className="space-y-4">
                {CONTACT_LINKS.map(({ href, label, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-signal"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface transition-colors group-hover:border-signal/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm">{label}</span>
                  </a>
                ))}

                <a
                  href="https://www.workana.com/freelancer/437cc119618fe4e29dcd802b65cc8825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-signal"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface font-mono text-sm font-bold transition-colors group-hover:border-signal/40">
                    W
                  </div>
                  <span className="font-mono text-sm">
                    workana.com/freelancer/david-de-vito
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-line bg-surface p-6">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center py-12 text-center"
                >
                  <CheckCircle2 className="mb-3 h-10 w-10 text-signal" />
                  <div className="mb-2 font-display text-lg font-semibold text-bone">
                    {t.contact.successHeader}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t.contact.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-signal-strong disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t.contact.send}
                      </>
                    )}
                  </button>

                  {error && (
                    <p
                      role="alert"
                      className="text-center text-sm text-destructive"
                    >
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
