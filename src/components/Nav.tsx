import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group" aria-label="墨 Sumi ホーム">
      <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-indigo text-washi font-serif text-lg leading-none transition-colors group-hover:bg-indigo-light">
        墨
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-lg tracking-wide text-indigo">墨</span>
        <span className="font-display text-[10px] uppercase tracking-[0.2em] text-sumi-muted">Sumi</span>
      </span>
    </a>
  )
}

export function Nav() {
  const { lang, toggle } = useLanguage()
  const links = [
    { href: '#product', label: content.nav.product },
    { href: '#solutions', label: content.nav.solutions },
    { href: '#customers', label: content.nav.customers },
    { href: '#company', label: content.nav.company },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-indigo/8 bg-washi/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        aria-label={lang === 'ja' ? 'メインナビゲーション' : 'Main navigation'}
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-sumi-muted transition-colors hover:text-indigo"
              >
                {t(link.label, lang)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="rounded-sm border border-indigo/15 px-2.5 py-1 text-xs tracking-wide text-sumi-muted transition-colors hover:border-indigo/30 hover:text-indigo"
            aria-label={lang === 'ja' ? 'Switch to English' : '日本語に切り替え'}
          >
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
          <a
            href="#contact"
            className="hidden rounded-sm bg-indigo px-4 py-2 text-sm text-washi transition-colors hover:bg-indigo-light sm:inline-block"
          >
            {t(content.nav.cta, lang)}
          </a>
        </div>
      </nav>
    </header>
  )
}
