import Hero from "@/components/blocks/Hero";
import USPStrip from "@/components/blocks/USPStrip";
import FeaturedProducts from "@/components/blocks/FeaturedProducts";
import ScentIconsRow from "@/components/blocks/ScentIconsRow";
import TestimonialsMarquee from "@/components/blocks/TestimonialsMarquee";
import NewsletterSignup from "@/components/blocks/NewsletterSignup";
import CTASection from "@/components/blocks/CTASection";
import { heroContent } from "@/lib/hero";
import { getFeaturedProducts } from "@/lib/repo/products.server";

export default async function Home() {
  const featured = await getFeaturedProducts();
  return (
    <>
      <Hero {...heroContent.default} />
      <USPStrip
        items={[
          {
            title: "Clean ingredients",
            description: "Butters & oils—no fillers",
          },
          { title: "Small batch", description: "Hand poured in Ohio" },
          { title: "Soft hold", description: "Tames flyaways, no grease" },
          {
            title: "Barbershop approved",
            description: "Subtle, everyday scents",
          },
        ]}
      />
      <FeaturedProducts title="Featured" products={featured} />
      <ScentIconsRow
        items={[
          { name: "Woodsman", href: "/scents#woodsman" },
          { name: "Wizard’s Beard", href: "/scents#wizardsBeard" },
          { name: "Orange Spice", href: "/scents#orangeSpice" },
          { name: "Lemon", href: "/scents#lemon" },
          { name: "Peppermint", href: "/scents#peppermint" },
          { name: "Bay Rum", href: "/scents#bayRum" },
        ]}
      />
      <TestimonialsMarquee
        items={[
          { quote: "Best balm I’ve used—zero greasiness.", author: "Marcus" },
          { quote: "Woodsman smells like a real forest.", author: "Devon" },
          { quote: "Tamed the mess without the shine.", author: "Ian" },
        ]}
      />
      <NewsletterSignup />
      <CTASection
        headline="Ready to level up your beard?"
        subcopy="Pick a scent, add to cart, and we’ll pour, pack, and ship fast."
        primary={{ label: "Shop Balms", href: "/products" }}
        secondary={{ label: "Explore Scents", href: "/scents" }}
      />
    </>
  );
}
