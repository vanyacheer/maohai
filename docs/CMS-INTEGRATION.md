# CMS 串接說明

## 為什麼這個版本適合接 CMS

頁面不直接寫死產品與文章資料，而是統一呼叫：

```ts
const content = await getSiteContent();
```

`getSiteContent()` 位於 `src/lib/content/index.ts`。現在使用本機資料；未來可替換成 Strapi、Sanity、Contentful、Directus 或其他 Headless CMS。

## 網站需要的資料格式

型別定義在：

```text
src/lib/content/types.ts
```

CMS 回傳內容需對應 `SiteContent`，主要包括：

- `contact`：電話、LINE、Email、地址與服務時間
- `products`：產品名稱、月租、圖片、規格與說明
- `commonSpecs`：共用技術規格
- `faqs`：分類、問題與答案
- `blogPosts`：文章標題、摘要、分類、日期與 slug

## 串接步驟

1. 在 CMS 建立對應 Collection／Content Type。
2. 將 `src/lib/content/index.ts` 的 API 路徑與欄位 mapping 改成所選 CMS 格式。
3. 在 Zeabur 設定：

```text
CONTENT_SOURCE=cms
CMS_BASE_URL=https://你的-cms-網址
CMS_API_TOKEN=唯讀權杖
```

4. CMS 發布內容時，POST 到：

```text
https://你的網站/api/revalidate
```

並帶入 Header：

```text
x-revalidate-secret: 你設定的 CMS_REVALIDATE_SECRET
```

網站會清除 `site-content` 快取，新內容便能出現在前台。

## 建議原則

- CMS token 使用唯讀權限。
- API token、SMTP 密碼、revalidate secret 只放 Zeabur Variables。
- 不要把任何密碼提交到 GitHub。
- 產品圖片若由 CMS 託管，需在 `next.config.ts` 加入 CMS 圖片網域。
