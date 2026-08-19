import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "關於我們",
  description: "毛孩呼吸致力提供犬貓居家氧氣照護與氧氣機租借服務，從品牌初衷到服務理念，陪伴每一隻毛孩在熟悉的家中安心呼吸。",
};
export default function About(){return <><PageHero eyebrow="關於毛孩呼吸" title="用專業與溫度，陪伴每一次呼吸" text="毛孩呼吸相信每一隻毛孩都值得在熟悉的家中，獲得安心、清楚且容易執行的呼吸照護。"/><section className="section"><div className="container story-grid"><div><SectionHeading left eyebrow="我們的初衷" title="從一次陪伴開始的品牌故事"/><p>創辦團隊曾陪伴家中老犬走過心臟病末期的居家照護歷程，深刻感受到氧氣設備取得不易、操作資訊不足的困境。於是我們希望整理出一套真正為犬貓家庭著想、簡單好上手的居家氧氣照護服務。</p><p>我們深知每一次呼吸急促背後，都是家人的擔憂與不捨。因此除了提供設備，我們也持續累積衛教內容，希望讓更多飼主能及早辨識徵兆，並在需要時獲得清楚的支援。</p></div><div className="story-logo glass-panel"><Image src="/images/maohai-logo.png" alt="毛孩呼吸品牌標誌" width={420} height={420}/></div></div></section><section className="section soft-section"><div className="container three-grid values"><article><span>01</span><h3>專業為本</h3><p>設備資訊依原廠規格整理，實際照護方式則由獸醫師依毛孩狀況評估。</p></article><article><span>02</span><h3>以毛孩為中心</h3><p>從噪音、設備擺放到操作說明，每個細節都優先考量毛孩的舒適與安全。</p></article><article><span>03</span><h3>陪伴不缺席</h3><p>從機型選擇、到府安裝到租借期間的使用問題，都有人可以詢問。</p></article></div></section></>}
