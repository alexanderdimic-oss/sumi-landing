import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'
import { useInView } from '../hooks/useInView'

export function ValuePillars() {
  const { lang } = useLanguage()
  const { ref, visible } = useInView()

  return (
    <section
      id="solutions"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-lg">
          <h2 id="pillars-heading" className="font-serif text-3xl text-indigo md:text-4xl">
            {t(content.pillars.title, lang)}
          </h2>
          <p className="mt-3 text-sumi-muted">{t(content.pillars.subtitle, lang)}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.pillars.items.map((item, i) => (
            <article
              key={item.kanji}
              className={`group relative rounded-sm border border-indigo/10 bg-washi p-6 transition-all duration-700 hover:border-gold/30 hover:shadow-sm ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <span
                className="absolute -top-3 right-4 font-serif text-4xl text-indigo/10 transition-colors group-hover:text-gold/20"
                aria-hidden="true"
              >
                {item.kanji}
              </span>
              <h3 className="font-serif text-lg text-indigo">{t(item.title, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sumi-muted">{t(item.desc, lang)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
