"use client";
import React, { useState } from "react";
import SectionHeader from "@app/components/common_components/SectionHeader";
import { useRouter } from "@node_modules/next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Login successful");
        router.push("/upload");
      } else {
        setMessage(`❌ ${data.message || "Login failed"}`);
      }
    } catch (err) {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <SectionHeader />
      <main className="p-20">
        <form onSubmit={handleSubmit} className="mx-auto w-fit">
          <h1 className="ml-10 mt-3 font-caudex text-4xl max-md:text-3xl max-md:leading-8 font-bold text-primary-maroon">
            Login
          </h1>
          <br></br>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-96 ml-10 border border-gray-300 rounded-md px-4 py-2"
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-96 ml-10 mt-3 border border-gray-300 rounded-md px-4 py-2"
          />
          <br></br>
          <button
            type="submit"
            disabled={loading}
            className="p-4 ml-10 mt-5 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && (
            <p className="text-center text-sm text-red-600 mt-2">{message}</p>
          )}
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
