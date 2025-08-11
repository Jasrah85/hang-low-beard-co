"use client";

import { Button } from "@/components/ui/Button";

export default function ShareButtons({
  title,
  url,
}: {
  title: string;
  url?: string;
}) {
  async function share() {
    const shareUrl = url ?? window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied!");
      }
    } catch {}
  }

  const twitter =
    typeof window !== "undefined"
      ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url ?? window.location.href)}`
      : "#";

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" onClick={share}>
        Share
      </Button>
      <a
        href={twitter}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-xl border border-stone-300 px-4 py-2 text-sm dark:border-stone-700"
      >
        Tweet
      </a>
    </div>
  );
}
