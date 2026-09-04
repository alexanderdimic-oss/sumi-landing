import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'

function AsanohaAccent() {
  return (
    <svg
      className="pointer-events-none absolute right-8 bottom-0 h-32 w-32 opacity-[0.06]"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <pattern id="asanoha" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#f7f5f0" strokeWidth="0.3" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="#f7f5f0" strokeWidth="0.3" />
        <line x1="0" y1="0" x2="20" y2="20" stroke="#f7f5f0" strokeWidth="0.3" />
        <line x1="20" y1="0" x2="0" y2="20" stroke="#f7f5f0" strokeWidth="0.3" />
      </pattern>
      <rect width="100" height="100" fill="url(#asanoha)" />
    </svg>
  )
}

export function CtaBand() {
  const { lang } = useLanguage()

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-indigo py-20 text-washi md:py-24"
      aria-labelledby="cta-heading"
    >
      <AsanohaAccent />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 id="cta-heading" className="font-serif text-3xl md:text-4xl">
          {t(content.ctaBand.title, lang)}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-washi/75">
          {t(content.ctaBand.subtitle, lang)}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-sm bg-washi px-6 py-3 text-sm text-indigo transition-colors hover:bg-washi-dark"
          >
            {t(content.ctaBand.primary, lang)}
          </a>
          <a
            href="#"
            className="rounded-sm border border-washi/30 px-6 py-3 text-sm text-washi transition-colors hover:border-washi/60 hover:bg-washi/5"
          >
            {t(content.ctaBand.secondary, lang)}
          </a>
        </div>
      </div>
    </section>
  )
}
