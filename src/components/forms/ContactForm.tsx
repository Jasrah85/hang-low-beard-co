"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { push } = useToast();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      push({ title: "Sent", message: "Thanks! We'll get back to you soon." });
      form.reset();
    } catch {
      push({ title: "Oops", message: "Could not send message right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <label className="grid gap-1 text-sm">
        <span>Name</span>
        <input
          name="name"
          required
          className="rounded-xl border border-stone-300 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Email</span>
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-stone-300 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-xl border border-stone-300 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900"
        />
      </label>
      <Button disabled={loading}>{loading ? "Sending…" : "Send"}</Button>
    </form>
  );
}
