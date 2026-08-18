import Image from "next/image";
import Link from "next/link";
import { CTA, SectionHeading } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";

const benefits = [
  ["01", "減輕心肺負擔", "穩定的氧氣供應能降低心臟與肺部的運作壓力，讓身體有更多餘裕進行修復與代謝。"],
  ["02", "改善呼吸品質", "提升吸入氧氣濃度，協助緩解呼吸急促、張口喘息等不適，讓毛孩呼吸更順暢。"],
  ["03", "居家即可進行", "不需長時間往返醫院，在熟悉、低壓力的家中環境進行照護，減少毛孩的緊張與不安。"],
  ["04", "陪伴照護更安心", "搭配透明氧氣箱，讓照護者隨時掌握毛孩狀況，照護過程更有信心。"],
] as const;
const conditions = [["♡","心臟病","如二尖瓣閉鎖不全、擴張性心肌病等，容易因心肺功能下降導致呼吸急促。"],["◌","肺部疾病","氣管塌陷、肺炎、慢性支氣管炎等呼吸道疾病，可依獸醫師建議提供居家呼吸支持。"],["＋","術後恢復","手術麻醉後或呼吸道相關手術後，穩定的氧氣環境可作為恢復期間的照護支持。"],["⌁","高齡犬貓","年長毛孩心肺功能自然退化、日常活動力下降時，可評估適度的氧氣照護。"]] as const;
const steps = [["01","線上或電話諮詢","告訴我們毛孩的狀況與需求，協助評估合適方案。"],["02","選擇租借方案","依照護需求與環境，選擇標準型或靜音型。"],["03","到府安裝教學","協助安裝設備，並教學正確操作與清潔方式。"],["04","期間保養與支援","租借期間提供設備保養與使用諮詢支援。"],["05","到期歸還或續租","租期結束後可選擇歸還設備，或依需求續租。"]] as const;

export default async function Home() {
  const content = await getSiteContent();
  const heroProduct = content.products[0];
  return <>
    <section className="hero warm-scene"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">♡ 給牠最純淨的愛</span><h1>每一次呼吸<br />都是<span>愛</span>的延續</h1><p>提供犬貓居家氧氣治療、氧氣機租借與照護支援，陪伴心臟病、肺部疾病、術後恢復與高齡毛孩，在熟悉的家中獲得穩定安心的呼吸支持。</p><div className="button-row"><Link className="button primary" href="/products">探索產品</Link><Link className="button ghost" href="/rental">查看租借方案</Link></div><div className="hero-stats"><div><strong>2</strong><span>款專業機型</span></div><div><strong>93%</strong><span>氧氣濃度</span></div><div><strong>0.5–5</strong><span>L/min 流量</span></div></div></div><div className="hero-visual glass-panel"><div className="pet-mark"><Image src="/images/maohai-logo.jpg" alt="毛孩呼吸狗狗與貓咪標誌" width={128} height={128} priority /></div><Image className="hero-machine" src={heroProduct.image} alt={heroProduct.name} width={630} height={486} priority /><div className="oxygen-badge"><strong>93%</strong><span>穩定高濃度氧氣</span></div></div></div><div className="container feature-ribbon glass-panel"><div><b>93%</b><span><strong>穩定製氧</strong><small>氧氣濃度 93% ± 3%</small></span></div><div><b>40dB</b><span><strong>靜音選擇</strong><small>EverFlo Q 安靜運轉</small></span></div><div><b>24h</b><span><strong>連續供氧</strong><small>長時間居家照護</small></span></div><div><b>到府</b><span><strong>安裝教學</strong><small>定位、連接與基礎操作</small></span></div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="為什麼需要" title="為什麼毛孩需要居家氧氣照護" text="當心肺功能受到疾病、手術或老化影響，穩定的氧氣供應是恢復健康與維持生活品質的重要一環。" /><div className="four-grid">{benefits.map(([n,t,p]) => <article className="glass-card" key={t}><span className="card-number">{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionHeading eyebrow="適用對象" title="這些狀況，都適合評估居家氧氣照護" text="無論是慢性疾病管理，或是短期術後恢復，都應先由獸醫師評估，再選擇合適的照護方式。" /><div className="four-grid">{conditions.map(([i,t,p]) => <article className="condition-card" key={t}><span className="icon-orb">{i}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="兩款機型" title="穩定型與靜音型，依毛孩需求選擇" text="兩款皆具備連續供氧與 0.5–5 L/min 流量調整，差異主要在運轉音量與租金。" /><div className="two-grid">{content.products.map((product) => <article className="product-card glass-card" key={product.slug}><div className="product-image"><Image src={product.image} alt={product.name} width={630} height={520} /><span className="product-tag">{product.label}</span></div><div className="product-copy"><h3>{product.name}</h3><p>{product.description}</p><div className="price-row"><span>月租</span><strong>NT$ {product.rent.toLocaleString()}</strong><small>／月</small></div><Link className="button primary" href="/products">查看完整規格</Link></div></article>)}</div></div></section>
    <section className="section soft-section"><div className="container"><SectionHeading eyebrow="使用流程" title="五個步驟，開始居家氧氣照護" text="從諮詢到到府安裝，我們陪伴您完成每一個環節。" /><div className="steps">{steps.map(([n,t,p]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="常見問題" title="飼主們最常詢問的問題" /><div className="faq-list">{content.faqs.slice(0,5).map((faq) => <details key={faq.question}><summary>{faq.question}<span>＋</span></summary><p>{faq.answer}</p></details>)}</div><div className="center-link"><Link href="/faq">查看更多常見問題 →</Link></div></div></section>
    <CTA lineHref={content.contact.lineHref} />
  </>;
}
