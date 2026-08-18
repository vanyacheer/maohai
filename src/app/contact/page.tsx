import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "聯絡我們",
  description: "毛孩呼吸客服聯絡方式：電話、LINE、Email 線上諮詢，或填寫表單留下需求，專人將於一個工作日內回覆，協助您選擇合適的氧氣機租借方案。",
};
export default async function Contact(){const {contact}=await getSiteContent();return <><PageHero eyebrow="聯絡我們" title="讓我們陪您一起，為毛孩找到合適的照護方式" text="無論是租借諮詢、機型選擇，或是使用上的疑問，都歡迎透過以下方式與我們聯繫。"/><section className="section"><div className="container contact-grid"><div className="contact-cards"><a className="glass-card" href={contact.phoneHref}><span className="icon-orb">☎</span><small>電話諮詢</small><strong>{contact.phone}</strong></a><a className="glass-card" href={contact.lineHref}><span className="icon-orb">聊</span><small>LINE 好友</small><strong>{contact.line}</strong></a><a className="glass-card" href={`mailto:${contact.email}`}><span className="icon-orb">＠</span><small>電子信箱</small><strong>{contact.email}</strong></a><div className="hours-card glass-panel"><div><small>服務時間</small><strong>{contact.hours}</strong></div><div><small>服務地址</small><strong>{contact.address}</strong></div></div></div><ContactForm/></div></section></>}
