"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (response.ok) { form.reset(); setStatus("success"); } else setStatus("error");
  }

  return <form className="contact-form glass-panel" onSubmit={submit}><span className="eyebrow">線上諮詢表單</span><h2>填寫需求，我們與您聯繫</h2><p>專人將於一個工作日內回覆。</p>
    <label>您的姓名<input name="name" required placeholder="請輸入姓名" /></label>
    <label>聯絡電話<input name="phone" required inputMode="tel" placeholder="09xx-xxx-xxx" /></label>
    <label>毛孩狀況（品種／年齡／症狀）<input name="pet" placeholder="例如：米克斯犬／12 歲／呼吸急促" /></label>
    <label>諮詢項目<select name="topic"><option>氧氣機租借</option><option>使用諮詢</option><option>其他問題</option></select></label>
    <label>留言內容<textarea name="message" rows={5} placeholder="請描述您的需求" /></label>
    <button className="button primary" disabled={status === "sending"} type="submit">{status === "sending" ? "送出中…" : "送出諮詢"}</button>
    <p className="form-status" aria-live="polite">{status === "success" ? "已收到您的訊息，我們會儘快聯絡您。" : status === "error" ? "目前無法送出，請改用電話或 LINE 聯繫。" : ""}</p>
  </form>;
}
