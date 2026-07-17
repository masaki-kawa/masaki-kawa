# Vacanti AI — Development Roadmap / 開発ロードマップ

> **Vacanti AI**: An AI job application workspace for Australia.
> 留学生・ワーホリ・卒業ビザ保持者などオーストラリアの求職者向けに、応募ワークフローを1か所で高速化するAIワークスペース。

This folder is the single home for the Vacanti AI development roadmap: the data, the process, and the visual map.
このフォルダがロードマップの「本体」です。データ・運用プロセス・ビジュアルマップのすべてがここに集まります。

## Files / ファイル構成

| File | What it is |
| --- | --- |
| [`index.html`](./index.html) | **Interactive 3D roadmap** — open in a browser (works on mobile). / ブラウザで開くインタラクティブ3Dロードマップ(スマホ対応) |
| [`roadmap-data.js`](./roadmap-data.js) | **Single Source of Truth.** Edit this file and the 3D map updates automatically. / ロードマップ本体データ。これを編集すれば3Dマップが自動更新 |
| [`PRIORITIZATION.md`](./PRIORITIZATION.md) | How wish list items become roadmap items. / ウィッシュリスト→ロードマップ化の優先順位付けルール |
| [`wishlist/`](./wishlist/) | Team wish list. One markdown file per idea. / チームのウィッシュリスト置き場(1アイデア=1ファイル) |

## Roadmap structure / ロードマップの構造

- **Timeline (X-axis):** 2026 H2, July–December, month-level granularity.
  タイムラインは2026年下半期(7〜12月)、月単位。
- **Swimlanes (Z-axis):** 5 categories (see below).
- **Confidence decreases over time / 先になるほど粗くする:**

| Horizon | Window | Commitment | 3D visual |
| --- | --- | --- | --- |
| **Now** | 0–1 month | Committed, has a target month | Solid glowing node / 発光 |
| **Next** | 1–3 months | Near-certain, target month is a plan | Semi-transparent / 半透明 |
| **Later** | 3–6 months | Direction only, target month optional | Wireframe / ワイヤーフレーム |

Only **Now** items carry date commitments. **Later** items are themes, not promises — this keeps the roadmap honest for an early-stage product.
日付をコミットするのはNowだけ。Laterは「テーマ」であって約束ではありません。

## Categories (swimlanes) / カテゴリ

| Lane | Contents / 中身 |
| --- | --- |
| 🏁 **Milestones** | Business outcomes, not features (launch, paying users, retention). / 機能ではなくビジネスの到達点 |
| 📦 **Product** | Core workflow: JD intake, resume, cover letter, company research, match scoring, application tracking. |
| 🎨 **UX & UI** | Design, onboarding, mobile, multilingual support. / デザイン・オンボーディング・モバイル・多言語 |
| 📈 **Growth & Revenue** | Acquisition, activation, pricing, referral. / 集客・課金・紹介 |
| 🔧 **Dev & Platform** | Infra, auth, billing, AI pipeline, quality & cost. / 基盤・課金・AIパイプライン・品質 |

Every non-milestone item must point at the milestone it serves (`milestone:` field). If it serves none, it goes to Later or is dropped.
マイルストーン以外の全アイテムは「どのマイルストーンに効くか」を必ず持ちます。どれにも効かないならLater行きか見送り。

## Workflow / 運用フロー

```
1. Collect   — Anyone adds ideas to wishlist/ (problems, not features)
2. Prioritize — Strategy filter → ICE score (see PRIORITIZATION.md)
3. Place     — Winning items go into roadmap-data.js with horizon + lane
4. Review    — Revisit every 2 weeks: Now→done, Next→Now, Later→Next
```

1. **収集** — 誰でも `wishlist/` にアイデア(機能ではなく困りごと)を追加
2. **優先順位付け** — 戦略フィルタ → ICEスコア([PRIORITIZATION.md](./PRIORITIZATION.md))
3. **配置** — 採用アイテムを `roadmap-data.js` に追加
4. **見直し** — 2週間ごとにレビューし、Now→完了 / Next→Now / Later→Next と繰り上げ

### WIP limits / 同時進行の上限

Max **2 "Now" items per lane** at any time. If you want to add a third, finish or demote one first.
各レーンのNowは同時2件まで。3件目を入れたければ、先に1件を完了させるか降格させる。

## Viewing the 3D map / 3Dマップの見方

- **Local:** open `index.html` in any browser (no build step needed).
- **Mobile / phone:** drag to rotate, pinch to zoom, tap a node for details.
- **GitHub Pages (after merge):** `https://masaki-kawa.github.io/masaki-kawa/vacanti-roadmap/`

> ⚠️ **Current items are `[SAMPLE]` placeholders.** Replace them as the team agrees on real roadmap items.
> 現在のアイテムはすべて `[SAMPLE]`(サンプル)です。チームで実際の項目を決めながら差し替えてください。
