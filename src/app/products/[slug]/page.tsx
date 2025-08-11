// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductTitle from "@/components/pdp/ProductTitle";
import ProductPrice from "@/components/pdp/ProductPrice";
import ScentNotes from "@/components/pdp/ScentNotes";
import IngredientsList from "@/components/pdp/IngredientsList";
import HowToUse from "@/components/pdp/HowToUse";
import ShippingReturns from "@/components/pdp/ShippingReturns";
import ShareButtons from "@/components/pdp/ShareButtons";
import PurchaseBox from "@/components/pdp/PurchaseBox";

import { getProductBySlug } from "@/lib/repo/products.server";
import { productMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  return p ? productMetadata(p) : {};
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  const defaultVariant = product.variants[0];

  return (
    <Container className="py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} />

        <div>
          <ProductTitle title={product.title} />
          <div className="mt-2">
            <ProductPrice price={defaultVariant.price} />
          </div>

          {/* client boundary for variant/qty/add-to-cart */}
          <PurchaseBox product={product} />

          <div className="mt-8 grid gap-6">
            <ScentNotes scents={product.scents} />
            <IngredientsList
              friendly={[
                "Shea butter",
                "Beeswax",
                "Jojoba oil",
                "Castor oil",
                "Vitamin E",
              ]}
              inci={[
                "Butyrospermum Parkii (Shea) Butter",
                "Cera Alba (Beeswax)",
                "Simmondsia Chinensis (Jojoba) Seed Oil",
                "Ricinus Communis (Castor) Seed Oil",
                "Tocopheryl Acetate",
                "Fragrance/Essential Oil",
              ]}
            />
            <HowToUse
              steps={[
                "Scoop a pea-sized amount",
                "Warm between palms",
                "Work into beard and skin",
                "Comb/brush to style",
              ]}
            />
            <ShippingReturns />
            <ShareButtons title={product.title} />
          </div>
        </div>
      </div>
    </Container>
  );
}
