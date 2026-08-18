import { localContent } from "./local";
import type { SiteContent } from "./types";

async function getCmsContent(): Promise<SiteContent> {
  const baseUrl = process.env.CMS_BASE_URL;
  if (!baseUrl) return localContent;

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/site-content`, {
    headers: process.env.CMS_API_TOKEN ? { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` } : undefined,
    next: { revalidate: 300, tags: ["site-content"] },
  });

  if (!response.ok) throw new Error(`CMS 回應失敗：${response.status}`);
  return response.json() as Promise<SiteContent>;
}

export async function getSiteContent(): Promise<SiteContent> {
  if (process.env.CONTENT_SOURCE !== "cms") return localContent;
  try {
    return await getCmsContent();
  } catch (error) {
    console.error("CMS 讀取失敗，改用本機內容", error);
    return localContent;
  }
}
