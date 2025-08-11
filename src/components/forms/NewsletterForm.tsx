"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      push({ title: "Subscribed", message: "Welcome aboard!" });
      setEmail("");
    } catch {
      push({ title: "Oops", message: "Could not subscribe right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-stone-400 dark:border-stone-700 dark:bg-stone-900"
      />
      <Button disabled={loading}>{loading ? "…" : "Subscribe"}</Button>
    </form>
  );
}
