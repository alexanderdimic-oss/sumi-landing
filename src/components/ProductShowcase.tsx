import { useLanguage } from '../context/LanguageContext'
import { content, t } from '../data/content'
import { useInView } from '../hooks/useInView'

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-sm border border-indigo/15 bg-washi shadow-lg">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-indigo/10 bg-indigo/5 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-gold/40" />
        <span className="h-2 w-2 rounded-full bg-indigo/20" />
        <span className="h-2 w-2 rounded-full bg-indigo/20" />
        <span className="ml-3 text-[10px] tracking-widest text-sumi-muted uppercase">
          Sumi Console
        </span>
      </div>

      <div className="grid md:grid-cols-[180px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-indigo/8 bg-washi-dark/30 p-4 md:block">
          <nav className="space-y-1" aria-hidden="true">
            {['カタログ', 'パイプライン', '品質', '系譜', '設定'].map((item, i) => (
              <div
                key={item}
                className={`rounded-sm px-3 py-2 text-xs ${
                  i === 0 ? 'bg-indigo/10 text-indigo font-medium' : 'text-sumi-muted'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="p-4 md:p-6">
          {/* Stats row */}
          <div className="mb-5 grid grid-cols-3 gap-3">
            {[
              { label: '品質スコア', value: '94.2', trend: '+2.1' },
              { label: 'アクティブ', value: '127', trend: '' },
              { label: 'アラート', value: '3', trend: '-5' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-indigo/8 bg-washi p-3"
              >
                <p className="text-[10px] text-sumi-muted">{stat.label}</p>
                <p className="font-serif text-xl text-indigo">{stat.value}</p>
                {stat.trend && (
                  <p className="text-[10px] text-gold">{stat.trend}</p>
                )}
              </div>
            ))}
          </div>

          {/* Lineage diagram */}
          <div className="rounded-sm border border-indigo/8 bg-washi-dark/20 p-4">
            <p className="mb-3 text-[10px] tracking-widest text-sumi-muted uppercase">
              データ系譜 — customer_orders
            </p>
            <svg viewBox="0 0 400 120" className="w-full" aria-hidden="true">
              {/* Connection lines */}
              <line x1="80" y1="60" x2="160" y2="30" stroke="#b8956a" strokeWidth="0.75" opacity="0.6" />
              <line x1="80" y1="60" x2="160" y2="90" stroke="#b8956a" strokeWidth="0.75" opacity="0.6" />
              <line x1="240" y1="30" x2="320" y2="60" stroke="#b8956a" strokeWidth="0.75" opacity="0.6" />
              <line x1="240" y1="90" x2="320" y2="60" stroke="#b8956a" strokeWidth="0.75" opacity="0.6" />

              {/* Nodes */}
              {[
                { x: 40, y: 60, label: 'CRM', w: 80 },
                { x: 200, y: 30, label: 'ETL', w: 80 },
                { x: 200, y: 90, label: 'Clean', w: 80 },
                { x: 360, y: 60, label: 'DW', w: 80 },
              ].map((node) => (
                <g key={node.label}>
                  <rect
                    x={node.x - node.w / 2}
                    y={node.y - 14}
                    width={node.w}
                    height="28"
                    rx="2"
                    fill="#f7f5f0"
                    stroke="#1e2d4a"
                    strokeWidth="0.75"
                    opacity="0.9"
                  />
                  <text
                    x={node.x}
                    y={node.y + 4}
                    textAnchor="middle"
                    fill="#1e2d4a"
                    fontSize="10"
                    fontFamily="'Noto Sans JP', sans-serif"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Table preview */}
          <div className="mt-4 overflow-hidden rounded-sm border border-indigo/8">
            <table className="w-full text-left text-[10px]">
              <thead>
                <tr className="border-b border-indigo/8 bg-indigo/5">
                  <th className="px-3 py-2 font-medium text-sumi-muted">データセット</th>
                  <th className="px-3 py-2 font-medium text-sumi-muted">品質</th>
                  <th className="px-3 py-2 font-medium text-sumi-muted">PII</th>
                  <th className="hidden px-3 py-2 font-medium text-sumi-muted sm:table-cell">更新</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'customer_master', quality: 98, pii: true, updated: '2h' },
                  { name: 'transaction_log', quality: 91, pii: false, updated: '15m' },
                  { name: 'product_catalog', quality: 96, pii: false, updated: '1d' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-indigo/5 last:border-0">
                    <td className="px-3 py-2 text-indigo">{row.name}</td>
                    <td className="px-3 py-2">
                      <span className="inline-block h-1.5 w-12 rounded-full bg-indigo/10">
                        <span
                          className="block h-full rounded-full bg-gold"
                          style={{ width: `${row.quality}%` }}
                        />
                      </span>
                    </td>
                    <td className="px-3 py-2 text-sumi-muted">{row.pii ? '検出' : '—'}</td>
                    <td className="hidden px-3 py-2 text-sumi-muted sm:table-cell">{row.updated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductShowcase() {
  const { lang } = useLanguage()
  const { ref, visible } = useInView()

  return (
    <section
      id="product"
      ref={ref as React.RefObject<HTMLElement>}
      className="border-y border-indigo/6 bg-washi-dark/30 py-20 md:py-28"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <h2 id="product-heading" className="font-serif text-3xl text-indigo md:text-4xl">
              {t(content.product.title, lang)}
            </h2>
            <p className="mt-3 text-sumi-muted">{t(content.product.subtitle, lang)}</p>
          </div>
          <ul className="flex gap-8 md:justify-end">
            {content.product.stats.map((stat) => (
              <li key={stat.value} className="text-center">
                <p className="font-serif text-2xl text-indigo md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-sumi-muted">{t(stat.label, lang)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <DashboardMock />
        </div>
      </div>
    </section>
  )
}
