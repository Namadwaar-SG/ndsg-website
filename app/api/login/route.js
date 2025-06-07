import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@app/firebaseconfig";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log(email);

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

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        email: user.email,
        uid: user.uid,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { message: err.message || "Login failed" },
      { status: 401 }
    );
  }
}
