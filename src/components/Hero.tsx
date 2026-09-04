import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'

function SeigaihaPattern() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.04] md:w-2/5"
      aria-hidden="true"
    >
      <defs>
        <pattern id="seigaiha" x="0" y="0" width="40" height="22" patternUnits="userSpaceOnUse">
          <path
            d="M0 22 Q10 0 20 22 Q30 0 40 22"
            fill="none"
            stroke="#1e2d4a"
            strokeWidth="0.5"
          />
          <path
            d="M0 22 Q10 11 20 22 Q30 11 40 22"
            fill="none"
            stroke="#1e2d4a"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#seigaiha)" />
    </svg>
  )
}

export function Hero() {
  const { lang } = useLanguage()

  return (
    <section className="relative overflow-hidden paper-texture">
      <SeigaihaPattern />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-28">
        <div className="relative z-10 max-w-xl animate-fade-up">
          <p className="mb-4 text-xs font-medium tracking-[0.25em] text-gold uppercase">
            {t(content.hero.eyebrow, lang)}
          </p>
          <h1 className="font-serif text-4xl leading-tight tracking-wide text-indigo md:text-5xl lg:text-[3.25rem]">
            {t(content.hero.headline, lang)}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-sumi-muted md:text-lg">
            {t(content.hero.subcopy, lang)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-indigo px-6 py-3 text-sm text-washi transition-colors hover:bg-indigo-light"
            >
              {t(content.hero.ctaPrimary, lang)}
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-indigo/25 px-6 py-3 text-sm text-indigo transition-colors hover:border-indigo/50 hover:bg-indigo/5"
            >
              {t(content.hero.ctaSecondary, lang)}
            </a>
          </div>
        </div>

        <div
          className="relative hidden md:flex md:items-center md:justify-center"
          aria-hidden="true"
        >
          <span className="text-vertical font-serif text-7xl tracking-[0.3em] text-indigo/8">
            {t(content.hero.verticalLabel, lang)}
          </span>
          <div className="absolute -right-2 h-48 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
        </div>
      </div>

      <div className="hairline-gold mx-auto max-w-6xl opacity-50" />
    </section>
  )
}
