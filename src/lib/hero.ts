// src/lib/hero.ts
export type HeroContent = {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  bullets?: string[]; // optional quick value props
  image?: { src: string; alt: string; priority?: boolean };
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const heroContent: Record<string, HeroContent> = {
  default: {
    eyebrow: "Handcrafted • Small Batch",
    headline: "Beard Balm That Behaves",
    subheadline:
      "Condition, tame, and add a soft, natural finish—without the greasy feel. Woodsman, Wizard’s Beard, Orange Spice, Lemon, Peppermint, Cinnamon, Fresh n’ Clean, Bay Rum, Zesty Mint.",
    bullets: [
      "Clean ingredients",
      "Made in Ohio",
      "Soft hold, all-day comfort",
    ],
    image: {
      src: "/images/hero-balm.webp",
      alt: "Beard balm tins and comb on a rustic wood surface",
      priority: true,
    },
    primaryCta: { label: "Shop Balms", href: "/products" },
    secondaryCta: { label: "Explore Scents", href: "/scents" },
  },
  newDrop: {
    eyebrow: "Limited Batch",
    headline: "Zesty Mint Is Back",
    subheadline:
      "Bright citrus + cool spearmint with a whisper of eucalyptus. Small run—when it’s gone, it’s gone.",
    bullets: ["Fresh drop", "Small batch", "Ships this week"],
    image: {
      src: "/images/hero-zesty-mint.webp",
      alt: "Mint leaves and citrus next to a balm tin",
    },
    primaryCta: { label: "Grab Zesty Mint", href: "/products/zesty-mint" },
    secondaryCta: { label: "All Scents", href: "/scents" },
  },
  promo: {
    eyebrow: "Launch Offer",
    headline: "10% Off Your First Order",
    subheadline:
      "Join the list for new scents, restocks, and care tips—your code arrives instantly.",
    bullets: ["One-time code", "No spam, ever", "Early access to drops"],
    image: {
      src: "/images/hero-offer.webp",
      alt: "Gift-style product flat lay with ribbon and balm",
    },
    primaryCta: { label: "Get My Code", href: "/signup" },
    secondaryCta: { label: "Shop Balms", href: "/products" },
  },
  seasonal: {
    eyebrow: "Fall Favorites",
    headline: "Warm Spice, Softer Beard",
    subheadline:
      "Cozy blends like Orange Spice and Cinnamon keep things smooth when temps drop.",
    bullets: ["Soft hold", "Subtle sheen", "Cold-weather friendly"],
    image: {
      src: "/images/hero-fall.webp",
      alt: "Balm tin with spices—cinnamon sticks, cloves, orange peel",
    },
    primaryCta: { label: "Shop Fall Scents", href: "/collections/fall" },
    secondaryCta: { label: "All Balms", href: "/products" },
  },
  wholesale: {
    eyebrow: "Wholesale & Bulk",
    headline: "Stock Hang Low Beard Co.",
    subheadline:
      "Barbershops and boutiques love our subtle scents and clean formulas. Low MOQs and fast turnaround.",
    bullets: ["Low minimums", "Private label options", "Fast restocks"],
    image: {
      src: "/images/hero-wholesale.webp",
      alt: "Multiple balm tins arranged for retail display",
    },
    primaryCta: { label: "Apply for Wholesale", href: "/wholesale" },
    secondaryCta: { label: "About Our Process", href: "/about" },
  },
};
