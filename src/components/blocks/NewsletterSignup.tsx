"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/Toast";

export default function NewsletterSignup({
  title = "10% off your first order",
  subtitle = "Join the list for launches, limited batches, and care tips.",
  actionLabel = "Subscribe",
}: {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      // POST to your API route (create later)
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      push({
        title: "Subscribed",
        message: "Check your inbox for a welcome email.",
      });
      setEmail("");
    } catch (err) {
      push({
        title: "Oops",
        message: "Could not subscribe. Try again in a minute.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 text-stone-600 dark:text-stone-300">{subtitle}</p>
      <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 dark:border-stone-700 dark:bg-stone-900"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl px-5 py-3 text-sm font-medium ring-1 ring-transparent transition hover:opacity-90 bg-black text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {loading ? "…" : actionLabel}
        </button>
      </form>
    </section>
  );
}
