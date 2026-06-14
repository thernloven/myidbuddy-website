"use client";

import { useState } from "react";

export default function WaitlistForm({ dark }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex w-full max-w-md items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold ${
          dark ? "bg-white/20 text-white" : "bg-[#3FBF8F]/12 text-[#2f9e76]"
        }`}
      >
        <span>🎉</span> You&apos;re on the list! Check your inbox to confirm.
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@airline.com"
          className={`h-12 flex-1 rounded-full px-5 text-sm outline-none ring-1 transition focus:ring-2 ${
            dark
              ? "bg-white/15 text-white placeholder-white/60 ring-white/25 focus:ring-white"
              : "bg-cloud text-navy placeholder-muted ring-transparent focus:ring-accent"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`h-12 rounded-full px-6 text-sm font-semibold shadow-card transition active:scale-[0.98] disabled:opacity-70 ${
            dark ? "bg-white text-accent" : "bg-accent text-white hover:bg-accent-deep"
          }`}
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      {status === "error" && (
        <p className={`mt-2 text-xs ${dark ? "text-white/90" : "text-accent-deep"}`}>{message}</p>
      )}
    </div>
  );
}
