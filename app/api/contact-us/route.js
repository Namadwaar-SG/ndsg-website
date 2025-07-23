export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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
    const { name, email, phone } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }
    const docRef = await db.collection("signups").add({
      name: name,
      email: email,
      phone: phone,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "namadwaarsingapore@gmail.com", // Replace with where you want form responses sent
      subject: "[Contact Us] - New Response!",
      text: `Name: ${name || ""}\nEmail: ${email || ""}\nPhone: ${phone || ""}`,
    };
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(error);
    }
    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving post:", error);
    return NextResponse.json({ error: "Failed to save post" }, { status: 500 });
  }
}
