"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-3 text-green-400 font-mono text-sm bg-green-400/10 border border-green-400/20 px-5 py-3 rounded-lg">
          <span>✓</span>
          <span>Got it — we&apos;ll reach out when the waitlist opens.</span>
        </div>
        <p className="text-xs text-zinc-600 font-mono">
          Note: waitlist sign-up is currently a placeholder. Your intent has been noted.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-3 justify-center">
        <span className="text-xs font-mono text-zinc-600 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">
          Waitlist · placeholder · sign-up coming soon
        </span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:border-green-500 transition-colors font-mono"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-green-500 text-zinc-950 rounded-md font-semibold text-sm hover:bg-green-400 transition-colors shrink-0"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}
