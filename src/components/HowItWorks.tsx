import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'
import { useInView } from '../hooks/useInView'

export function HowItWorks() {
  const { lang } = useLanguage()
  const { ref, visible } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-lg">
          <h2 id="how-heading" className="font-serif text-3xl text-indigo md:text-4xl">
            {t(content.howItWorks.title, lang)}
          </h2>
          <p className="mt-3 text-sumi-muted">{t(content.howItWorks.subtitle, lang)}</p>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line */}
          <div
            className="absolute top-8 right-[16.67%] left-[16.67%] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block"
            aria-hidden="true"
          />

          {content.howItWorks.steps.map((step, i) => (
            <li
              key={step.num}
              className={`relative transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/30 bg-washi font-serif text-lg text-gold">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-indigo/10 md:hidden" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl text-indigo">{t(step.title, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sumi-muted">{t(step.desc, lang)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
