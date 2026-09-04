export type Lang = 'ja' | 'en'

export const content = {
  nav: {
    product: { ja: '製品', en: 'Product' },
    solutions: { ja: 'ソリューション', en: 'Solutions' },
    customers: { ja: 'お客様', en: 'Customers' },
    company: { ja: '会社概要', en: 'Company' },
    cta: { ja: '相談する', en: 'Contact us' },
  },
  hero: {
    eyebrow: { ja: 'エンタープライズ・データ管理', en: 'Enterprise Data Management' },
    headline: {
      ja: 'データを、静かに整える。',
      en: 'Bring order to your data, quietly.',
    },
    subcopy: {
      ja: '墨は、ガバナンス・品質・プライバシーをひとつの基盤に統合。複雑なデータ環境を、信頼できる資産へと変えます。',
      en: 'Sumi unifies governance, quality, and privacy on one foundation — turning complex data estates into trusted assets.',
    },
    ctaPrimary: { ja: '相談する', en: 'Talk to us' },
    ctaSecondary: { ja: '資料請求', en: 'Request materials' },
    verticalLabel: { ja: '整', en: 'Order' },
  },
  trust: {
    label: {
      ja: '信頼いただいている企業',
      en: 'Trusted by leading organizations',
    },
    logos: [
      { name: '東洋重工業', en: 'Toyo Heavy Industries' },
      { name: '北陸フィナンシャル', en: 'Hokuriku Financial' },
      { name: '翠ヶ丘製薬', en: 'Suigaoka Pharma' },
      { name: '光通信システムズ', en: 'Hikari Telecom' },
      { name: '蒼海エナジー', en: 'Sokai Energy' },
    ],
  },
  pillars: {
    title: { ja: '四つの柱', en: 'Four pillars' },
    subtitle: {
      ja: 'データの価値を守り、届けるための基盤',
      en: 'The foundation for protecting and delivering data value',
    },
    items: [
      {
        kanji: '質',
        title: { ja: 'データ品質', en: 'Data Quality' },
        desc: {
          ja: '自動プロファイリングと品質スコアリングで、信頼できるデータのみを流通させます。',
          en: 'Automated profiling and quality scoring ensure only trustworthy data flows through your organization.',
        },
      },
      {
        kanji: '脈',
        title: { ja: '系譜とガバナンス', en: 'Lineage & Governance' },
        desc: {
          ja: 'エンドツーエンドの系譜追跡とポリシー管理で、誰が何をいつ使ったかを明確に。',
          en: 'End-to-end lineage tracking and policy management clarify who used what, and when.',
        },
      },
      {
        kanji: '盾',
        title: { ja: 'セキュリティとコンプライアンス', en: 'Security & Compliance' },
        desc: {
          ja: 'PIIの自動検出、マスキング、監査ログで、国内外の規制要件に対応。',
          en: 'Automatic PII detection, masking, and audit logs meet domestic and international regulatory requirements.',
        },
      },
      {
        kanji: '速',
        title: { ja: 'インサイトへの速度', en: 'Speed to Insight' },
        desc: {
          ja: '統合カタログとセルフサービス探索で、分析チームの待ち時間を短縮。',
          en: 'A unified catalog and self-service discovery shorten wait times for analytics teams.',
        },
      },
    ],
  },
  product: {
    title: { ja: 'ひとつの画面で、全体像を', en: 'The full picture, one view' },
    subtitle: {
      ja: 'データカタログ、パイプライン監視、ガバナンスダッシュボードを統合',
      en: 'Unified data catalog, pipeline monitoring, and governance dashboard',
    },
    stats: [
      { value: '99.97%', label: { ja: 'パイプライン可用性', en: 'Pipeline uptime' } },
      { value: '3.2x', label: { ja: '分析リードタイム短縮', en: 'Faster analytics' } },
      { value: '847', label: { ja: '管理データセット', en: 'Datasets governed' } },
    ],
  },
  howItWorks: {
    title: { ja: '導入の流れ', en: 'How it works' },
    subtitle: {
      ja: '三つのステップで、データ基盤を整える',
      en: 'Three steps to bring your data foundation in order',
    },
    steps: [
      {
        num: '壱',
        title: { ja: '接続と発見', en: 'Connect & Discover' },
        desc: {
          ja: '既存のデータソース、ウェアハウス、レイクを接続。自動スキャンで資産を可視化します。',
          en: 'Connect existing sources, warehouses, and lakes. Automated scanning makes assets visible.',
        },
      },
      {
        num: '弐',
        title: { ja: '整備と保護', en: 'Curate & Protect' },
        desc: {
          ja: '品質ルール、系譜マッピング、プライバシーポリシーを設定。データを信頼できる状態に。',
          en: 'Set quality rules, lineage mappings, and privacy policies. Bring data to a trusted state.',
        },
      },
      {
        num: '参',
        title: { ja: '活用と監視', en: 'Enable & Monitor' },
        desc: {
          ja: 'セルフサービスカタログで分析を加速。リアルタイム監視で品質を維持。',
          en: 'Accelerate analytics with self-service catalog. Maintain quality with real-time monitoring.',
        },
      },
    ],
  },
  social: {
    title: { ja: 'お客様の声', en: 'Customer stories' },
    cases: [
      {
        company: { ja: '東洋重工業株式会社', en: 'Toyo Heavy Industries' },
        industry: { ja: '製造業', en: 'Manufacturing' },
        quote: {
          ja: '分散していた品質管理を墨に統合し、監査対応の工数を60%削減しました。',
          en: 'Consolidating fragmented quality management on Sumi reduced audit preparation effort by 60%.',
        },
        author: { ja: '情報システム部 部長 田中 誠一', en: 'Seiichi Tanaka, Head of IT' },
      },
      {
        company: { ja: '北陸フィナンシャルグループ', en: 'Hokuriku Financial Group' },
        industry: { ja: '金融', en: 'Financial Services' },
        quote: {
          ja: 'PIIの自動マスキングと系譜追跡により、個人情報保護法への対応が格段に楽になりました。',
          en: 'Automatic PII masking and lineage tracking made APPI compliance dramatically easier.',
        },
        author: { ja: 'データガバナンス室 室長 佐藤 美咲', en: 'Misaki Sato, Data Governance Lead' },
      },
      {
        company: { ja: '翠ヶ丘製薬', en: 'Suigaoka Pharma' },
        industry: { ja: 'ヘルスケア', en: 'Healthcare' },
        quote: {
          ja: '臨床試験データの品質スコアリングで、規制当局への提出物の信頼性が向上しました。',
          en: 'Quality scoring for clinical trial data improved the reliability of regulatory submissions.',
        },
        author: { ja: 'データサイエンス部 リード 山本 健太', en: 'Kenta Yamamoto, Data Science Lead' },
      },
    ],
  },
  ctaBand: {
    title: { ja: 'データの未来を、整えませんか。', en: 'Ready to bring order to your data?' },
    subtitle: {
      ja: '専門チームが貴社のデータ環境を無料で診断します。',
      en: 'Our specialists will assess your data environment at no charge.',
    },
    primary: { ja: '無料相談を予約', en: 'Book a free consultation' },
    secondary: { ja: '資料をダウンロード', en: 'Download brochure' },
  },
  footer: {
    tagline: {
      ja: 'データを、静かに整える。',
      en: 'Bring order to your data, quietly.',
    },
    columns: [
      {
        title: { ja: '製品', en: 'Product' },
        links: [
          { ja: 'データカタログ', en: 'Data Catalog' },
          { ja: '品質管理', en: 'Quality Management' },
          { ja: '系譜追跡', en: 'Lineage' },
          { ja: 'プライバシー', en: 'Privacy' },
        ],
      },
      {
        title: { ja: '会社', en: 'Company' },
        links: [
          { ja: '会社概要', en: 'About' },
          { ja: '採用情報', en: 'Careers' },
          { ja: 'ニュース', en: 'News' },
          { ja: 'お問い合わせ', en: 'Contact' },
        ],
      },
      {
        title: { ja: 'リソース', en: 'Resources' },
        links: [
          { ja: 'ドキュメント', en: 'Documentation' },
          { ja: 'ブログ', en: 'Blog' },
          { ja: 'セキュリティ', en: 'Security' },
          { ja: 'ステータス', en: 'Status' },
        ],
      },
      {
        title: { ja: '法務', en: 'Legal' },
        links: [
          { ja: 'プライバシーポリシー', en: 'Privacy Policy' },
          { ja: '利用規約', en: 'Terms of Service' },
          { ja: '特定商取引法', en: 'Commercial Transactions' },
          { ja: 'Cookie設定', en: 'Cookie Settings' },
        ],
      },
    ],
    copyright: { ja: '© 2026 墨株式会社 Sumi Inc. All rights reserved.', en: '© 2026 Sumi Inc. All rights reserved.' },
    address: {
      ja: '東京都千代田区丸の内一丁目 — 丸の内ビルディング',
      en: 'Marunouchi Building, 1-chome, Chiyoda, Tokyo',
    },
  },
} as const

export function t<T extends Record<Lang, string>>(obj: T, lang: Lang): string {
  return obj[lang]
}
