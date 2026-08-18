import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "租借方案",
  description: "犬貓氧氣機月租方案，EverFlo 每月 NT$3,000、EverFlo Q 靜音型每月 NT$3,500，含到府安裝教學與租借期間使用諮詢，費用透明無隱藏成本。",
};
export default async function Rental(){const {products}=await getSiteContent();return <><PageHero eyebrow="租借方案" title="依照護需求，選擇合適機型" text="依環境與毛孩的聲音敏感度選擇，月租費用透明。"/><section className="section"><div className="container two-grid rental-grid">{products.map((p,i)=><article className={`rental-card glass-panel${i?" featured":""}`} key={p.slug}>{i===1&&<span className="popular">靜音推薦</span>}<span className="eyebrow">{p.label}</span><h2>{p.name}</h2><div className="rental-price"><strong>NT$ {p.rent.toLocaleString()}</strong><span>／30 天</span></div><p>{p.description}</p><ul className="check-list"><li>✓ 氧氣濃度 93% ± 3%</li><li>✓ 流量 0.5–5 L/min</li><li>✓ 到府安裝與操作教學</li><li>✓ 租借期間設備使用諮詢</li></ul><Link className="button primary" href="/contact">選擇此方案</Link></article>)}</div><p className="center-note">押金、運送、耗材、氧氣箱與到府服務費用，需依設備狀況、地區及實際需求確認，最終以專人報價為準。</p></section><section className="section soft-section"><div className="container"><SectionHeading eyebrow="租借流程" title="從諮詢到到府安裝，五步驟完成"/><div className="steps">{[["01","線上或電話諮詢"],["02","選擇租借方案"],["03","到府安裝教學"],["04","期間保養與支援"],["05","到期歸還或續租"]].map(([n,t])=><div key={n}><b>{n}</b><h3>{t}</h3><p>專人協助確認需求與下一步安排。</p></div>)}</div></div></section></>}
