// src/app/(site)/faqs/page.tsx
import Container from "@/components/layout/Container";
import Accordion from "@/components/ui/Accordion";

export const metadata = {
  title: "FAQs — Hang Low Beard Co.",
  description: "Answers about ingredients, shipping, returns, and more.",
};

export default function FAQPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-2xl font-bold">FAQs</h1>
      <Accordion
        items={[
          {
            id: "ingredients",
            title: "What’s in your beard balm?",
            content: (
              <p>
                Simple, clean ingredients: shea butter, beeswax, jojoba oil,
                castor oil, vitamin E, and essential/fragrance oils.
              </p>
            ),
            defaultOpen: true,
          },
          {
            id: "hold",
            title: "What kind of hold can I expect?",
            content: (
              <p>Soft/medium hold to tame flyaways without the greasy shine.</p>
            ),
          },
          {
            id: "shipping",
            title: "How fast do you ship?",
            content: (
              <p>
                We pour and pack in 2–3 business days. Free US shipping over
                $40.
              </p>
            ),
          },
          {
            id: "returns",
            title: "What’s your return policy?",
            content: (
              <p>
                Unopened items within 30 days—reach out via the contact form.
              </p>
            ),
          },
        ]}
      />
    </Container>
  );
}
