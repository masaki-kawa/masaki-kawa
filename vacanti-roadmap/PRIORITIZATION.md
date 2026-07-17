# Prioritization Framework / 優先順位付けフレームワーク

How a wish list item becomes a roadmap item, in two steps. Designed to be fast enough to run in a 30-minute meeting.
ウィッシュリストのアイテムをロードマップに載せるための2段階プロセス。30分のミーティングで回せる軽さを重視。

## Step 1 — Strategy filter / 戦略フィルタ(Yes/Noで足切り)

Ask two questions. **Both must be Yes** to proceed to scoring:

| # | Question |
| --- | --- |
| Q1 | Does it make job applications **faster, more organized, or more tailored** for our users (international students, WHV, graduate visa holders in Australia)? <br>コアコンセプト「応募を速く・整理して・各求人に最適化」に効くか? |
| Q2 | Does it serve one of the **current milestones** in `roadmap-data.js`? <br>現在のマイルストーンのどれかに効くか? |

- **Yes + Yes** → go to Step 2.
- **Yes + No** → park in **Later** (it may serve a future milestone).
- **No + \*** → decline, but record the reason in the wish list file (don't delete it).
  見送り。ただし却下理由をウィッシュリストのファイルに残す(削除しない)。

## Step 2 — ICE score / ICEスコア(各1〜5点)

Each reviewer scores independently, then discuss the gaps (not the averages — the *disagreements* are where the insight is).
各自が独立に採点してから、点差が大きいところだけ議論する(議論価値があるのは「ズレ」)。

| Factor | 5 | 3 | 1 |
| --- | --- | --- | --- |
| **Impact** — user value & business numbers <br>ユーザー価値・事業数値への効き | Most active users feel it weekly / 大半のユーザーに毎週効く | A meaningful segment feels it / 一部セグメントに効く | Edge case / ごく一部 |
| **Confidence** — evidence behind the impact guess <br>そのインパクト予想の根拠 | User interviews / data / 実データ・ユーザーの声 | Strong analogy from competitors / 競合からの類推 | Pure hunch / 想像 |
| **Ease** — implementation effort <br>実装の軽さ | Days / 数日 | 1–2 weeks / 1〜2週間 | A month+ / 1ヶ月以上 |

**Score = I × C × E** (max 125).

## Placing items / Now・Next・Laterへの割当

1. Sort survivors by ICE score, highest first.
2. Fill **Now** top-down, respecting the WIP limit (**max 2 Now items per lane**).
3. Next tier goes to **Next**, the rest to **Later**.
4. Sanity-check dependencies: an item cannot be Now if it depends on a Next item.
   依存関係チェック: Nextのアイテムに依存するものはNowに置けない。
5. Update `roadmap-data.js` (`horizon`, `target`, `ice`, `milestone`, `wishlist` fields) — the 3D map updates itself.

## Cadence / 運用リズム

- **Every 2 weeks:** roadmap review — promote Next→Now, Later→Next, mark done items.
- **Monthly:** wish list triage — run Steps 1–2 on all new wish list items in one batch.
- **Anyone can add to the wish list at any time.** Nobody edits `roadmap-data.js` outside the review, so the roadmap stays a team decision, not a drive-by edit.
  ウィッシュリスト追加は誰でもいつでも可。ただし `roadmap-data.js` の編集はレビューの場でのみ行う(ロードマップは常にチームの合意物)。
