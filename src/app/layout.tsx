import type { Metadata } from "next";
import { Footer, Header } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://petoxygen.zeabur.app";
const defaultDescription = "毛孩呼吸提供寵物氧氣照護、EverFlo 與 EverFlo Q 氧氣濃縮機租借，以及到府安裝與操作說明。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "毛孩呼吸｜毛孩居家氧氣機租借", template: "%s｜毛孩呼吸" },
  description: defaultDescription,
  keywords: ["寵物氧氣機", "毛孩氧氣機", "寵物氧氣機租借", "EverFlo", "EverFlo Q", "寵物氧氣照護"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "毛孩呼吸",
    title: "毛孩呼吸｜寵物居家氧氣機租借",
    description: defaultDescription,
    images: [{ url: "/images/maohai-logo.png", width: 295, height: 342, alt: "毛孩呼吸 Pet Oxygen" }],
  },
  twitter: {
    card: "summary",
    title: "毛孩呼吸｜寵物居家氧氣機租借",
    description: defaultDescription,
    images: ["/images/maohai-logo.png"],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = await getSiteContent();
  return <html lang="zh-Hant-TW"><body><Header /><main>{children}</main><Footer content={content} /><a className="floating-chat" href={content.contact.lineHref} target="_blank" rel="noreferrer">LINE<small>線上客服</small></a></body></html>;
}
