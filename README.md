# SAND Research Resource Tracker

SAND の研究ノードを目標指定し、アンロックに必要な素材と現在入力済みの所持数との差分を確認するための静的 Web アプリです。

This is an unofficial fan utility for SAND: Raiders of Sophie. It is not affiliated with the game developers or publisher.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sagasa/sand-research-tracker)

## 方針

- クラウンは集計対象にしません。各ノードの参考表示だけに留めます。
- 進捗、研究済みノード、所持素材数、表示フィルタは Cookie に保存します。
- ブラウザ実行時に研究ツリーデータを取得したり再構築したりしません。
- 研究ツリーデータは `scripts/generate-tech-tree.mjs` で生成し、`src/generated/techTreeData.ts` としてバンドルします。
- 研究ノードのコスト/素材は SAND Guide、研究ノードID/ゲーム内進行スロットは SAND Game DB の公開情報を生成時に取り込みます。
- 公開情報に明示的な前提ノードIDがない場合、Tier順から前提を推測せず、前提込み素材集計は無効にします。
- 武器/弾アイコンは利便性のため同梱します。権利帰属は [ATTRIBUTION.md](./ATTRIBUTION.md) にまとめています。

## 出典と権利表記

出典、非公式表記、外部アセットを含めない方針は [ATTRIBUTION.md](./ATTRIBUTION.md) にまとめています。

このプロジェクトのソースコードは MIT License です。詳細は [LICENSE](./LICENSE) を参照してください。

## 開発

```powershell
npm install
npm run generate:all
npm run check
npm run build
npm run dev -- --host 127.0.0.1 --port 5174
```

通常の編集だけなら `npm run generate:all` は不要です。研究ツリーや装備スタッツの元データを更新したい場合だけ実行してください。

生成スクリプトは参考データから機能的な事実データを生成し、クライアント実行時の外部取得を避けます。`npm run generate:data` は外部の公開参考サイトへアクセスします。装備タブの武器/弾アイコンは `public/equipment-icons/` に配置します。

## Netlify

`netlify.toml` で以下を指定しています。

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Netlify へ配置する場合は、生成済みの `src/generated/techTreeData.ts` をリポジトリに含めてください。ビルド時に外部サイトへ取りに行く構成にはしていません。
装備スタッツは `src/generated/equipmentStatsData.ts`、武器/弾アイコンは `public/equipment-icons/` に同梱します。

Netlify の設定値:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22` (`netlify.toml` と `.nvmrc` で固定)
- Environment variables: none required

## Cookie

Cookie 名は `sand_research_tracker_state` 系です。状態が大きくなっても保存できるよう、必要に応じて複数 Cookie に分割します。

保存対象:

- 目標ノード
- 研究済みノード
- 所持素材数
- 検索、ブランチ、Tier、研究済み非表示の UI 状態
