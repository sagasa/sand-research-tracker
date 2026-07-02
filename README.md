# SAND Research Resource Tracker

SAND の研究ノードを目標指定し、アンロックに必要な素材と現在入力済みの所持数との差分を確認するための静的 Web アプリです。

This is an unofficial fan utility for SAND: Raiders of Sophie. It is not affiliated with the game developers or publisher.

## 方針

- クラウンは集計対象にしません。各ノードの参考表示だけに留めます。
- 進捗、研究済みノード、所持素材数、表示フィルタは Cookie に保存します。
- ブラウザ実行時に研究ツリーデータを取得したり再構築したりしません。
- 研究ツリーデータは `scripts/generate-tech-tree.mjs` で生成し、`src/generated/techTreeData.ts` としてバンドルします。
- ゲームファイル、画像、アイコン、スクリーンショットは同梱しません。

## 出典と権利表記

出典、非公式表記、外部アセットを含めない方針は [ATTRIBUTION.md](./ATTRIBUTION.md) にまとめています。

このプロジェクトのソースコードは MIT License です。詳細は [LICENSE](./LICENSE) を参照してください。

## 開発

```powershell
npm install
npm run generate:data
npm run check
npm run build
npm run dev -- --host 127.0.0.1 --port 5174
```

通常の編集だけなら `npm run generate:data` は不要です。公開 Wiki 側の研究データを更新したい場合だけ実行してください。

生成スクリプトは公開参考ページから機能的な事実データだけを抽出し、画像URLや説明文はバンドルしません。

## Netlify

`netlify.toml` で以下を指定しています。

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Netlify へ配置する場合は、生成済みの `src/generated/techTreeData.ts` をリポジトリに含めてください。ビルド時に外部サイトへ取りに行く構成にはしていません。

Netlify の設定値:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: Netlify の現行 LTS で動作する想定です。

## Cookie

Cookie 名は `sand_research_tracker_state` 系です。状態が大きくなっても保存できるよう、必要に応じて複数 Cookie に分割します。

保存対象:

- 目標ノード
- 研究済みノード
- 所持素材数
- 検索、ブランチ、Tier、研究済み非表示の UI 状態
