export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export async function GET() {
  const todayStr = new Date().toISOString().split("T")[0]; // "2025-07-12"
  try {
    let eventsQuery = db
      .collection("upcoming-event-post")
      .where("date", ">=", todayStr)
      .orderBy("date", "asc");

    const snapshot = await eventsQuery.get({ source: "server" });
    const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json(events, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch latest posts." },
      { status: 500 }
    );
  }
}
