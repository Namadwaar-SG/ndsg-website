import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@app/firebaseconfig";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const token = jwt.sign(
      {
        uid: user.uid,
        email: user.email,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
      path: "/",
      sameSite: "lax",
    });
    return response;
  } catch (err) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
}
