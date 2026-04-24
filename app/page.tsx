import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { TechStack } from "@/components/tech-stack"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
