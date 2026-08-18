import type { Metadata } from "next";
import { PageHero } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "常見問題",
  description: "犬貓氧氣機租借常見問題整理，涵蓋使用需求、租借費用、故障處理、噪音與居家安全注意事項，協助飼主更了解居家氧氣照護。",
};
export default async function Faq(){const {faqs}=await getSiteContent();const categories=[...new Set(faqs.map(f=>f.category))];return <><PageHero eyebrow="常見問題" title="關於居家氧氣照護，您可能想知道的事" text="整理飼主最常詢問的使用需求、租借流程與安全注意事項。"/><section className="section"><div className="container faq-categories">{categories.map(c=><div key={c}><h2>{c}</h2><div className="faq-list">{faqs.filter(f=>f.category===c).map(f=><details key={f.question}><summary>{f.question}<span>＋</span></summary><p>{f.answer}</p></details>)}</div></div>)}</div></section></>}
