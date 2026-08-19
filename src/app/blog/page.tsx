import type { Metadata } from "next";
import { PageHero } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "衛教部落格",
  description: "毛孩呼吸照護衛教文章，涵蓋心臟病居家照護、術後恢復期支持、高齡犬貓呼吸變化觀察，協助飼主及早發現徵兆並掌握照護重點。",
};
export default async function Blog(){const {blogPosts}=await getSiteContent();return <><PageHero eyebrow="衛教部落格" title="專業衛教知識，陪您一起照顧毛孩" text="從疾病照護、術後恢復到高齡照護，我們整理實用內容，協助飼主更了解居家氧氣照護。"/><section className="section"><div className="container three-grid blog-grid">{blogPosts.map((p,i)=><article className="blog-card glass-card" key={p.slug}><div className={`blog-art art-${i+1}`}><span>{i===0?"♡":i===1?"＋":"⌁"}</span></div><div className="blog-meta"><span>{p.category}</span><span>{p.readTime}</span></div><h2>{p.title}</h2><p>{p.excerpt}</p><time>{p.date}</time><small>文章整理中</small></article>)}</div><p className="medical-note">文章僅供一般衛教參考；若毛孩出現張口呼吸、舌色異常、昏沉或明顯呼吸困難，請立即就醫。</p></section></>}
