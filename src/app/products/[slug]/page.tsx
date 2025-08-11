// src/app/products/[slug]/page.tsx  (adjust path if you use (site)/)
import Container from "@/components/layout/Container";
import ProductGallery from "@/components/pdp/ProductGallery"; // client
import ProductTitle from "@/components/pdp/ProductTitle"; // server
import ProductPrice from "@/components/pdp/ProductPrice"; // server
import ScentNotes from "@/components/pdp/ScentNotes"; // server
import IngredientsList from "@/components/pdp/IngredientsList"; // server
import HowToUse from "@/components/pdp/HowToUse"; // server
import ShippingReturns from "@/components/pdp/ShippingReturns"; // server
import ShareButtons from "@/components/pdp/ShareButtons"; // client
import PurchaseBox from "@/components/pdp/PurchaseBox"; // client boundary (see below)

import { getProductBySlug } from "@/lib/repo/products.server";
import { notFound } from "next/navigation";
import { productMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = await getProductBySlug(params.slug);
  if (!p) return {};
  return productMetadata(p);
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
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

          {/* Client-side controls live inside PurchaseBox */}
          <PurchaseBox product={product} />

          {/* Details */}
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
