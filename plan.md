# Plan — Portfolio David De Vito → "verdaderamente profesional"

> Tema: **azul metal** (steel blue, sobrio) + fondo **Beams** en el hero.
> Objetivo: que toda la página se sienta senior, coherente y rápida, sin el look
> "terminal hacker" ni la tipografía Bricolage (descartados).

---

## Norte / principios
- **Sobrio y profesional** por encima de "llamativo". El azul metal manda.
- **Coherencia total**: el hero con Beams marca el tono; ninguna sección debe desentonar.
- **Identidad dev con oficio**, no gimmicks (sin glow neón, flicker, scanlines).
- **Performance y accesibilidad** como piso de calidad, no como extra.
- Cada decisión de color/tipo/motion sale de un sistema de tokens, no ad-hoc.

## Decisiones tomadas
- [x] **Tipografía**: **Space Grotesk** (títulos) + **Inter** (cuerpo) + **mono** (datos/etiquetas).
- [x] **Look dev**: **limpio, sin terminal** — fuera prompts `~/portfolio$`, `ddv.dev`,
  typing-terminal, `// comentarios`, `$`, mockups de consola.
- [x] **Animación**: **sobria** — reveals suaves al scroll + hovers sutiles; todo
  respeta `prefers-reduced-motion`.
- [x] **Beams**: haces teñidos del **azul del tema** (`#5B8DEF`).

---

## Fase 0 — Sistema de diseño (base) ✅ HECHO
Reinstaurar el azul metal de forma limpia y definir el sistema.
- `app/globals.css`: paleta steel-blue (ink `#0E1117`, surface, bone `#ECE7DD`,
  signal `#5B8DEF`, line, muted, faint). **Quitar** todos los keyframes/clases de
  terminal (glow-pulse, terminal-flicker, scan-line, cursor-blink) → look limpio.
- Tipografía vía `next/font`: **Space Grotesk** (`--font-display`), **Inter**
  (`--font-sans`), **mono** (`--font-mono`).
- Tokens de **motion** (duraciones + easing) y de radios/espaciado consistentes.
- Recolorear scrollbar y estados de foco al tema.
- **Archivos:** `app/globals.css`, `app/layout.tsx`

## Fase 1 — Hero ✅ HECHO
- Mantener **Beams**; `lightColor="#5B8DEF"` (azul del tema); overlay de legibilidad.
- **Performance/a11y del Beams**: pausar fuera de viewport y en mobile, cap de
  `dpr`, y desactivar con `prefers-reduced-motion`.
- Headline en **Space Grotesk** + copy sobrio.
- **Reemplazar el `typing-terminal`** por un hero limpio (sin mockup de consola).
- **Archivos:** `components/hero.tsx`, `components/Beams.jsx`, `components/typing-terminal.tsx`

## Fase 2 — Estructura global (que nada desentone) ✅ HECHO
- `navbar` (logo, tipografía, estados hover/activo, foco), `footer`.
- Coherencia de spacing y contenedores en todo el layout.
- **Archivos:** `components/navbar.tsx`, `components/footer.tsx`

## Fase 3 — Secciones de contenido ✅ HECHO
Migrar al sistema nuevo, una por una, sin que ninguna desentone:
- `about`, `experience`, `projects`, `testimonials`, `tech-stack`, `education`, `contact`.
- Unificar cards, headers de sección (revisar si los índices `01.`/`02.` aportan),
  jerarquía tipográfica, spacing.
- `metrics` (hoy suelto): integrarlo o rediseñarlo.
- **Archivos:** `components/about.tsx`, `experience.tsx`, `projects.tsx`,
  `testimonials.tsx`, `tech-stack.tsx`, `education.tsx`, `contact.tsx`, `metrics.tsx`

## Fase 4 — Proyectos (medios visuales) ✅ HECHO
- Frames de navegador para las webs con captura.
- Resolver fotos faltantes (Avanti, BoostUp, Mystery) — captura o esquema.
- Mantener las automatizaciones ya cargadas, adaptadas al tema.
- **Archivos:** `components/projects.tsx`, `public/projects/*`

## Fase 5 — Animaciones / motion ✅ HECHO
- `reveal` on-scroll sobrio y consistente; micro-interacciones (hover) acordes.
- Sin parpadeos ni efectos "AI-generated". Todo respeta `prefers-reduced-motion`.
- **Archivos:** `components/reveal.tsx`, `app/globals.css`

## Fase 6 — Performance ✅ HECHO
- [x] Beams: pausa offscreen + cap de `dpr` [1,1.5] + off en mobile/reduced-motion +
  `dynamic(ssr:false)` (three.js fuera del bundle inicial).
- [x] Imágenes: capturas PNG (~2.2 MB total) → **WebP** redimensionadas a 1200px
  (~113 KB total). `loading="lazy"`, `decoding="async"`, `width/height` (anti-CLS).
- [x] Code-splitting: three.js cargado sólo en el cliente vía import dinámico.
- Lighthouse: no medido en este entorno (ver nota Antigravity); esperado >90 por el
  recorte de imágenes y el lazy del Beams.

## Fase 7 — Accesibilidad ✅ HECHO
- [x] Foco visible global (`:focus-visible`), reduced-motion global, `lang="es"`.
- [x] **Skip link** "Saltar al contenido" → `#main`; `<main id="main">` y landmarks
  (`nav`/`main`/`footer`).
- [x] Form: labels asociadas, `role="alert"` en error, `role="status"` en éxito.
- [x] `alt` en capturas, `aria-label` en íconos-link, `aria-current`/`aria-expanded` en nav.

## Fase 8 — Contenido, credibilidad & SEO ✅ HECHO
- [x] OG/meta, canonical, keywords, robots meta (ya estaban).
- [x] **`sitemap.xml` + `robots.txt`** (Next metadata routes).
- [x] **JSON-LD `Person`** (rol, perfiles `sameAs`, `knowsAbout`).
- [x] CV PDF real en `/cv-david-de-vito.pdf`; favicon/íconos.
- Pendiente opcional: revisar honestidad de métricas (5/5, 9+, 22+) con David.

## Fase 9 — QA final 🟡 PARCIAL
- [x] `tsc --noEmit` limpio; `next build` de producción OK (rutas /, robots, sitemap).
- [ ] Smoke-test runtime / Lighthouse / responsive / cross-browser / ambos idiomas:
  **bloqueado en este entorno** — el dev server de Antigravity borra `.next` apenas
  termina el build, así que `next start` no levanta. Verificar en local (sin Antigravity)
  o en el deploy de Vercel.
- [ ] Deploy.

---

## Notas de entorno (importantes)
- **Antigravity IDE** relanza su propio dev server y compite por el puerto 3000;
  al cambiar tokens conviene **limpiar `.next`** o el CSS queda cacheado.
- **Defender** marcaba `contact.tsx` como falso positivo (ya excluido el proyecto).
- `three.js` pesa: tenerlo en cuenta en la Fase 6.
