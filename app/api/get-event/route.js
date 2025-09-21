import { NextResponse } from "next/server";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const pageSize = parseInt(searchParams.get("pageSize")) || 6;
  const cursor = searchParams.get("cursor");

  let eventsQuery = db
    .collection("event-post")
    .orderBy("date", "desc")
    .limit(pageSize);

  if (cursor) {
    const cursorDoc = await db.collection("event-post").doc(cursor).get();
    if (!cursorDoc.exists) {
      return NextResponse.json({ error: "Invalid cursor" }, { status: 400 });
    }

    eventsQuery = db
      .collection("event-post")
      .orderBy("date", "desc")
      .startAfter(cursorDoc)
      .limit(pageSize);
  }

  const snapshot = await eventsQuery.get();
  const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const lastVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
  const nextCursor = lastVisibleDoc ? lastVisibleDoc.id : null;

  // Get total post count
  const countSnapshot = await db.collection("event-post").count().get();
  const totalPosts = countSnapshot.data().count;

  return NextResponse.json({ events, nextCursor, totalPosts });
}
