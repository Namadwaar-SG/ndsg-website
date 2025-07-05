import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// GET /api/get-post-by-id?id=abc123
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing document ID" }, { status: 400 });
  }

  try {
    const docRef = db.collection("event-post").doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    return NextResponse.json({ id: docSnap.id, ...docSnap.data() }, { status: 200 });
  } catch (err) {
    console.error("Error fetching document:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
