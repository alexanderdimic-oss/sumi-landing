import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'
import { useInView } from '../hooks/useInView'

export function SocialProof() {
  const { lang } = useLanguage()
  const { ref, visible } = useInView()

  return (
    <section
      id="customers"
      ref={ref as React.RefObject<HTMLElement>}
      className="border-y border-indigo/6 bg-indigo py-20 text-washi md:py-28"
      aria-labelledby="social-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="social-heading" className="mb-14 font-serif text-3xl md:text-4xl">
          {t(content.social.title, lang)}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {content.social.cases.map((item, i) => (
            <blockquote
              key={item.company.ja}
              className={`flex flex-col rounded-sm border border-washi/10 bg-washi/5 p-6 backdrop-blur-sm transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <cite className="not-italic">
                  <span className="block font-serif text-sm">{t(item.company, lang)}</span>
                  <span className="text-xs text-washi/60">{t(item.industry, lang)}</span>
                </cite>
                <span className="font-serif text-2xl text-gold/30" aria-hidden="true">
                  "
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-washi/85">
                {t(item.quote, lang)}
              </p>
              <footer className="mt-5 border-t border-washi/10 pt-4 text-xs text-washi/60">
                {t(item.author, lang)}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
