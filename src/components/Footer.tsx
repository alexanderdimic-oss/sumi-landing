import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'

export function Footer() {
  const { lang } = useLanguage()

  return (
    <footer id="company" className="border-t border-indigo/8 bg-washi py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-indigo font-serif text-lg text-washi">
                墨
              </span>
              <span className="font-serif text-lg text-indigo">墨 Sumi</span>
            </div>
            <p className="text-sm text-sumi-muted">{t(content.footer.tagline, lang)}</p>
            <p className="mt-3 text-xs text-sumi-muted/70">{t(content.footer.address, lang)}</p>
          </div>

          {/* Link columns */}
          {content.footer.columns.map((col) => (
            <div key={col.title.ja}>
              <h3 className="mb-4 text-xs font-medium tracking-[0.15em] text-indigo uppercase">
                {t(col.title, lang)}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.ja}>
                    <a
                      href="#"
                      className="text-sm text-sumi-muted transition-colors hover:text-indigo"
                    >
                      {t(link, lang)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-gold mb-6 opacity-30" />
        <p className="text-center text-xs text-sumi-muted">{t(content.footer.copyright, lang)}</p>
      </div>
    </footer>
  )
}
