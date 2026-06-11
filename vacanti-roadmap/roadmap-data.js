/* ============================================================
   Vacanti AI Development Roadmap — Single Source of Truth
   ロードマップ本体データ(これを編集すると3Dマップが自動更新)

   How to edit / 編集方法:
   - Add/edit items in ROADMAP_DATA.items below.
   - lane:    milestones | product | ux-ui | growth | dev
   - horizon: now (0-1mo, committed) | next (1-3mo) | later (3-6mo, theme only)
   - target:  "2026-07" .. "2026-12"  (optional for "later" items)
   - size:    S | M | L
   - ice:     { i, c, e } each 1-5 (Impact / Confidence / Ease)
   - milestone: id of the milestone this item contributes to
   - wishlist:  source wish list item id (e.g. "W-001"), or null
   - sample:  true = placeholder example, replace during planning
============================================================ */
window.ROADMAP_DATA = {
  meta: {
    title: 'VACANTI AI ROADMAP',
    subtitle: '2026 H2 DEVELOPMENT MAP / JUL–DEC',
    updated: '2026-06-11',
  },

  lanes: [
    { id: 'milestones', label: 'Milestones', labelJa: 'マイルストーン', color: 0xfbbf24 },
    { id: 'product',    label: 'Product',    labelJa: 'プロダクト',     color: 0x22d3ee },
    { id: 'ux-ui',      label: 'UX & UI',    labelJa: 'UX・UI',        color: 0xa78bfa },
    { id: 'growth',     label: 'Growth',     labelJa: 'グロース・収益', color: 0x34d399 },
    { id: 'dev',        label: 'Dev & Platform', labelJa: '開発基盤',   color: 0xf472b6 },
  ],

  items: [
    /* ---------- Milestones (business outcomes, not features) ---------- */
    {
      id: 'M-001', lane: 'milestones', sample: true,
      title: 'Public launch v1', titleJa: '正式ローンチ v1',
      horizon: 'next', target: '2026-09', size: 'L', owner: 'TBD',
      ice: null, milestone: null, wishlist: null,
      notes: [
        'Core application workflow usable end-to-end / コア応募ワークフローが一気通貫で使える状態',
        'Definition of done to be agreed by team / 完了条件はチームで合意して定義する',
      ],
    },
    {
      id: 'M-002', lane: 'milestones', sample: true,
      title: '100 paying users', titleJa: '有料ユーザー100人',
      horizon: 'next', target: '2026-11', size: 'L', owner: 'TBD',
      ice: null, milestone: null, wishlist: null,
      notes: [
        'AUD $29/mo subscription / 月額29豪ドルのサブスクリプション',
        'Target number is a placeholder — set the real goal together / 数値はサンプル。実際の目標はチームで設定',
      ],
    },
    {
      id: 'M-003', lane: 'milestones', sample: true,
      title: 'Retention & churn baseline', titleJa: '継続率・解約率のベースライン確立',
      horizon: 'later', target: '2026-12', size: 'M', owner: 'TBD',
      ice: null, milestone: null, wishlist: null,
      notes: [
        'Understand the natural 1–2 month usage cycle / 「集中利用1〜2ヶ月」という利用サイクルの実態を数値で把握する',
      ],
    },

    /* ---------- Product ---------- */
    {
      id: 'P-001', lane: 'product', sample: true,
      title: 'JD import from URL', titleJa: '求人情報のURL取り込み',
      horizon: 'now', target: '2026-07', size: 'M', owner: 'TBD',
      ice: { i: 5, c: 4, e: 3 }, milestone: 'M-001', wishlist: null,
      notes: [
        'Paste a job board URL → structured job description in workspace / 求人URLを貼るだけでJDを構造化して取り込む',
      ],
    },
    {
      id: 'P-002', lane: 'product', sample: true,
      title: 'Cover letter generator v2', titleJa: 'カバーレター生成 v2',
      horizon: 'next', target: '2026-08', size: 'M', owner: 'TBD',
      ice: { i: 4, c: 4, e: 3 }, milestone: 'M-001', wishlist: null,
      notes: [
        'Tailored to each JD + user resume / JDとレジュメの両方に最適化した生成',
      ],
    },
    {
      id: 'P-003', lane: 'product', sample: true,
      title: 'Match score with explanations', titleJa: '根拠つきマッチスコア',
      horizon: 'later', target: '2026-10', size: 'L', owner: 'TBD',
      ice: { i: 4, c: 3, e: 2 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Show why a score is high/low and what to fix / スコアの理由と改善ポイントを提示する',
      ],
    },

    /* ---------- UX & UI ---------- */
    {
      id: 'U-001', lane: 'ux-ui', sample: true,
      title: 'Onboarding flow revamp', titleJa: 'オンボーディング刷新',
      horizon: 'now', target: '2026-07', size: 'M', owner: 'TBD',
      ice: { i: 5, c: 3, e: 4 }, milestone: 'M-002', wishlist: null,
      notes: [
        'First application prepared within 10 minutes of signup / 登録10分以内に最初の応募準備が完了する体験',
      ],
    },
    {
      id: 'U-002', lane: 'ux-ui', sample: true,
      title: 'Mobile experience', titleJa: 'モバイル対応強化',
      horizon: 'next', target: '2026-09', size: 'M', owner: 'TBD',
      ice: { i: 4, c: 3, e: 3 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Students apply from their phones between classes / 学生は移動中・授業の合間にスマホで応募する',
      ],
    },
    {
      id: 'U-003', lane: 'ux-ui', sample: true,
      title: 'Multilingual UI (JA / KO / ZH)', titleJa: '多言語UI(日・韓・中)',
      horizon: 'later', target: null, size: 'L', owner: 'TBD',
      ice: { i: 3, c: 3, e: 2 }, milestone: 'M-003', wishlist: null,
      notes: [
        'Lower the barrier for Asian job seekers / アジア系求職者向けに言語の壁を下げる',
      ],
    },

    /* ---------- Growth & Revenue ---------- */
    {
      id: 'G-001', lane: 'growth', sample: true,
      title: 'Pricing page & checkout test', titleJa: '料金ページ・課金導線テスト',
      horizon: 'now', target: '2026-08', size: 'S', owner: 'TBD',
      ice: { i: 4, c: 3, e: 5 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Validate $29/mo positioning and copy / 月額29ドルの訴求とコピーを検証',
      ],
    },
    {
      id: 'G-002', lane: 'growth', sample: true,
      title: 'Referral program', titleJa: '紹介プログラム',
      horizon: 'next', target: '2026-10', size: 'M', owner: 'TBD',
      ice: { i: 4, c: 3, e: 3 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Job-seeking communities are tight-knit — friends invite friends / 留学生コミュニティの口コミを仕組み化',
      ],
    },
    {
      id: 'G-003', lane: 'growth', sample: true,
      title: 'Campus / community campaigns', titleJa: '学校・コミュニティ施策',
      horizon: 'later', target: null, size: 'M', owner: 'TBD',
      ice: { i: 3, c: 2, e: 3 }, milestone: 'M-003', wishlist: null,
      notes: [
        'Ambassadors, student orgs, visa agencies / アンバサダー・学生団体・ビザエージェント連携など',
      ],
    },

    /* ---------- Dev & Platform ---------- */
    {
      id: 'D-001', lane: 'dev', sample: true,
      title: 'Billing & subscription hardening', titleJa: '課金・サブスク基盤の強化',
      horizon: 'now', target: '2026-07', size: 'M', owner: 'TBD',
      ice: { i: 5, c: 4, e: 3 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Stripe lifecycle: trial, cancel, dunning / トライアル・解約・督促まで含めた課金ライフサイクル',
      ],
    },
    {
      id: 'D-002', lane: 'dev', sample: true,
      title: 'AI cost & usage monitoring', titleJa: 'AIコスト・利用量モニタリング',
      horizon: 'next', target: '2026-09', size: 'S', owner: 'TBD',
      ice: { i: 3, c: 4, e: 4 }, milestone: 'M-002', wishlist: null,
      notes: [
        'Unit economics per user at $29/mo / 月額29ドルで成立するユーザー単位の原価把握',
      ],
    },
    {
      id: 'D-003', lane: 'dev', sample: true,
      title: 'Prompt / output quality evals', titleJa: '生成品質の評価パイプライン',
      horizon: 'later', target: null, size: 'M', owner: 'TBD',
      ice: { i: 4, c: 3, e: 2 }, milestone: 'M-003', wishlist: null,
      notes: [
        'Resumes and cover letters must stay reliably good / レジュメ・カバーレター品質の継続的検証',
      ],
    },
  ],
};
