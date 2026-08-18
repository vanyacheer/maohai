import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!process.env.CMS_REVALIDATE_SECRET || secret !== process.env.CMS_REVALIDATE_SECRET) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  revalidateTag("site-content", "max");
  return NextResponse.json({ revalidated: true });
}
