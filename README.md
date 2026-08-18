# 毛孩呼吸 Next.js 網站

這是可部署到 Zeabur 的 Next.js 16 App Router 專案，並已預留 Headless CMS 串接層。

## 已完成

- 暖色奶油橘＋毛玻璃 UI
- 毛孩呼吸 LOGO
- EverFlo／EverFlo Q 產品、規格與月租 NT$3,000／NT$3,500
- 首頁、產品、租借、關於、FAQ、部落格、聯絡我們等獨立網址
- 手機、平板、桌機響應式版面
- 集中式內容資料層，未來可換成 CMS API
- CMS 更新 webhook，可清除 Next.js 快取
- Gmail SMTP 聯絡表單 API
- SEO Metadata 與 Next/Image 圖片最佳化

## 本機執行

需要 Node.js 20.9 以上版本。

```bash
npm install
cp .env.example .env.local
npm run dev
```

瀏覽器開啟 `http://localhost:3000`。

## 內容放在哪裡

目前尚未指定 CMS，所以網站先讀取：

```text
src/lib/content/local.ts
```

所有產品、租金、FAQ、文章與聯絡資訊集中在此。CMS 串接入口是：

```text
src/lib/content/index.ts
```

完整說明請看 [docs/CMS-INTEGRATION.md](docs/CMS-INTEGRATION.md)。

## Gmail SMTP

在 Zeabur 的 Variables 設定：

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=你的 Gmail
SMTP_PASS=Google 產生的 16 位數應用程式密碼
CONTACT_TO_EMAIL=要接收表單的信箱
```

請勿把 `SMTP_PASS` 寫入 GitHub。

## 部署到 Zeabur

1. 把此專案完整上傳至 GitHub。
2. 在 Zeabur 建立 Service 並連接 Repository。
3. Zeabur 會讀取 `package.json`，執行 `npm run build`，再以 `npm start` 啟動。
4. 在 Zeabur Variables 加入 `.env.example` 中需要的變數。

## 上線前務必替換

目前沿用原站示意資料，請在 `src/lib/content/local.ts` 修改：

- `0800-123-456`
- `@petoxyhome`
- `service@petoxy-home.com`
- `台中市西屯區寵愛路 88 號`
- 尚未正式提供的服務承諾

產品規格仍請以實際租借機身標示、供貨商與原廠說明書為準。
