import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'

export function TrustStrip() {
  const { lang } = useLanguage()

  return (
    <section className="border-y border-indigo/6 bg-washi-dark/50 py-10" aria-label={t(content.trust.label, lang)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-8 text-center text-xs tracking-[0.2em] text-sumi-muted uppercase">
          {t(content.trust.label, lang)}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {content.trust.logos.map((logo) => (
            <li key={logo.name}>
              <div
                className="flex h-10 items-center justify-center rounded-sm border border-indigo/8 bg-washi px-6 opacity-60 transition-opacity hover:opacity-100"
                role="img"
                aria-label={lang === 'ja' ? logo.name : logo.en}
              >
                <span className="font-serif text-sm tracking-wider text-indigo/70">
                  {lang === 'ja' ? logo.name : logo.en}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
