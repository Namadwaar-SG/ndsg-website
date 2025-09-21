export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
  });
}
const db = getFirestore();

export async function POST(request) {
  try {
    const data = await request.json();
    const { images, richText, title, date, type } = data;

    if (!images || !richText || !Array.isArray(images)) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }
    if (type === "Past") {
      const docRef = await db.collection("event-post").add({
        title: title,
        date: date,
        image_links: images,
        rich_text: richText,
        created_at: new Date().toISOString(),
      });
      return NextResponse.json({ success: true, id: docRef.id });
    } else if (type === "Post") {
      const docRef = await db.collection("website-post").add({
        title: title,
        date: date,
        image_links: images,
        rich_text: richText,
        created_at: new Date().toISOString(),
      });
      return NextResponse.json({ success: true, id: docRef.id });
    } else {
      const docRef = await db.collection("upcoming-event-post").add({
        title: title,
        date: date,
        image_links: images,
        rich_text: richText,
        created_at: new Date().toISOString(),
      });
      return NextResponse.json({ success: true, id: docRef.id });
    }
  } catch (error) {
    console.error("Error saving post:", error);
    return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
  }
}
