# Wish List / ウィッシュリスト

Anyone on the team can add an idea, any time. **One file per idea**, named `W-XXX-short-title.md` (e.g. `W-001-jd-import.md`). Take the next free number.
チームの誰でも・いつでも追加OK。**1アイデア=1ファイル**、ファイル名は `W-XXX-短いタイトル.md`(連番は空いている次の番号)。

## The golden rule / 鉄則

**Write the problem, not the feature.** "Users can't X" beats "Add a button that does Y" — the right feature shape gets decided during prioritization.
**「欲しい機能」ではなく「困りごと」を書く。**「ユーザーがXできない」の方が「Yするボタンを追加」より価値がある。機能の形は優先順位付けの場で決める。

## Template / テンプレート

Copy this into your new file / 以下をコピーして新規ファイルに:

```markdown
# W-XXX: [Title — one line / タイトル(一言で)]

- **Submitted by / 提案者:**
- **Date / 日付:**

## Who is stuck? / 誰が困っている?
(e.g. international students / WHV / graduate visa / everyone)

## What is the problem? / 何に困っている?
(Describe the problem, not the solution / 機能ではなく困りごとを書く)

## Solution idea (optional) / 解決アイデア(任意)

## Impact guess / インパクト予想: S / M / L
(How many users apply faster or better because of this? / どれだけ多くのユーザーの応募が速く・良くなる?)

## Why now? (optional) / 急ぐ理由(任意)

## Links & notes / 参考リンク・メモ

---
_Status: open_  <!-- open / accepted → R-item-id / declined: reason -->
```

## What happens to your idea / 提出後の流れ

Monthly triage applies the [prioritization framework](../PRIORITIZATION.md). Outcomes are written back into the file's `Status` line: accepted ideas link to their roadmap item, declined ones keep the reason. **Files are never deleted** — declined ideas are searchable history.
月次トリアージで[優先順位付けフレームワーク](../PRIORITIZATION.md)にかけ、結果をファイル末尾の `Status` 行に追記します(採用→ロードマップID / 見送り→理由)。**ファイルは削除しません**。
