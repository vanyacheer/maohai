import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "資料格式錯誤" }, { status: 400 });
  const name = text(body.name, 80), phone = text(body.phone, 40), pet = text(body.pet, 300), topic = text(body.topic, 80), message = text(body.message, 2000);
  if (!name || !phone) return NextResponse.json({ error: "姓名與電話為必填" }, { status: 400 });

  const user = process.env.SMTP_USER, pass = process.env.SMTP_PASS, to = process.env.CONTACT_TO_EMAIL;
  if (!user || !pass || !to) return NextResponse.json({ error: "尚未設定寄信服務" }, { status: 503 });

  const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST || "smtp.gmail.com", port: Number(process.env.SMTP_PORT || 587), secure: false, auth: { user, pass } });
  await transporter.sendMail({ from: `毛孩呼吸網站 <${user}>`, to, replyTo: user, subject: `[網站諮詢] ${topic || "氧氣機服務"}－${name}`, text: `姓名：${name}\n電話：${phone}\n毛孩狀況：${pet}\n諮詢項目：${topic}\n\n留言：\n${message}` });
  return NextResponse.json({ ok: true });
}
