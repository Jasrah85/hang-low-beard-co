"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageRef } from "@/lib/types";

export default function ProductGallery({ images }: { images: ImageRef[] }) {
  const [idx, setIdx] = useState(0);
  const main = images?.[idx];

  if (!images?.length) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-900" />
    );
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow">
        {main && (
          <Image
            src={main.src}
            alt={main.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setIdx(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded-xl border ${
                i === idx
                  ? "border-black dark:border-white"
                  : "border-stone-200 dark:border-stone-800"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
