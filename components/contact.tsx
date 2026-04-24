"use client"

import { useState, type FormEvent } from "react"
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

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

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary font-mono text-sm">
            {t.contact.sectionIndex}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.contact.title}
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t.contact.intro}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:daviddevito01@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-mono">
                    daviddevito01@gmail.com
                  </span>
                </a>

                <a
                  href="https://github.com/DavidDeVito2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-mono">
                    github.com/DavidDeVito2001
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/david-devito-backend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-mono">
                    linkedin.com/in/david-devito-backend
                  </span>
                </a>

                <a
                  href="https://www.workana.com/freelancer/437cc119618fe4e29dcd802b65cc8825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="h-10 w-10 rounded-md bg-secondary border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors font-mono text-sm font-bold text-muted-foreground group-hover:text-primary">
                    W
                  </div>
                  <span className="text-sm font-mono">
                    workana.com/freelancer/david-de-vito
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6 text-muted-foreground font-mono text-xs">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="ml-2">{t.contact.fileName}</span>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-primary font-mono text-lg mb-2">
                    {t.contact.successHeader}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.contact.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-muted-foreground mb-1.5"
                    >
                      <span className="text-primary">$</span>{" "}
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-muted-foreground mb-1.5"
                    >
                      <span className="text-primary">$</span>{" "}
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-muted-foreground mb-1.5"
                    >
                      <span className="text-primary">$</span>{" "}
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <p className="text-sm text-destructive font-mono text-center">
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
