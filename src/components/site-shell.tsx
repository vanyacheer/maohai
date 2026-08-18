import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/content/types";

const nav = [
  ["/", "首頁"], ["/products", "產品介紹"], ["/rental", "租借方案"],
  ["/about", "關於我們"], ["/faq", "常見問題"], ["/blog", "衛教部落格"], ["/contact", "聯絡我們"],
] as const;

export function Header() {
  return <header className="site-header"><div className="nav-wrap">
    <Link className="brand" href="/" aria-label="毛孩呼吸首頁"><Image src="/images/maohai-logo.jpg" alt="毛孩呼吸 Pet Oxygen" width={64} height={64} priority /><span><strong>毛孩呼吸</strong><small>PET OXYGEN</small></span></Link>
    <nav className="desktop-nav" aria-label="主選單">{nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link className="nav-cta" href="/contact">立即諮詢</Link>
    <details className="mobile-menu"><summary aria-label="開啟選單"><i></i><i></i><i></i></summary><nav>{nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
  </div></header>;
}

export function Footer({ content }: { content: SiteContent }) {
  const { contact } = content;
  return <footer className="site-footer"><div className="footer-grid">
    <div className="footer-brand"><Image src="/images/maohai-logo.jpg" alt="毛孩呼吸" width={86} height={86} /><p>讓每一次呼吸，都安心在家完成。提供犬貓居家氧氣治療與氧氣機租借，陪伴毛孩每一次穩定的呼吸。</p></div>
    <div><h3>關於我們</h3><Link href="/about">品牌介紹</Link><Link href="/faq">常見問題</Link><Link href="/blog">衛教部落格</Link></div>
    <div><h3>服務項目</h3><Link href="/products">產品介紹</Link><Link href="/rental">租借方案</Link><Link href="/contact">聯絡我們</Link></div>
    <div><h3>聯絡方式</h3><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.lineHref}>LINE：{contact.line}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><span>{contact.address}</span></div>
  </div><div className="footer-bottom"><span>© 2026 毛孩呼吸 All Rights Reserved.｜<Link href="/privacy">隱私權政策</Link></span><span>本站內容僅供衛教參考，實際照護請以獸醫師專業建議為準。</span></div></footer>;
}

export function SectionHeading({ eyebrow, title, text, left }: { eyebrow: string; title: string; text?: string; left?: boolean }) {
  return <div className={`section-heading${left ? " left" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero warm-scene"><div className="container narrow center"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

export function CTA({ lineHref }: { lineHref: string }) {
  return <section className="section-sm"><div className="container glass-panel cta-panel"><div><span className="eyebrow">讓照護更安心</span><h2>讓我們一起，陪毛孩穩穩呼吸</h2><p>不確定該選擇哪一款機型嗎？留下需求，專人將於一個工作日內與您聯繫。</p></div><div className="button-row"><Link className="button primary" href="/contact">立即諮詢</Link><a className="button ghost" href={lineHref} target="_blank" rel="noreferrer">加 LINE 好友</a></div></div></section>;
}
