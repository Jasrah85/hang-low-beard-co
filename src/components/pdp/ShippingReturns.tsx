import Accordion from "@/components/ui/Accordion";

export default function ShippingReturns({
  shipping,
  returns,
}: {
  shipping?: React.ReactNode;
  returns?: React.ReactNode;
}) {
  return (
    <Accordion
      items={[
        {
          id: "ship",
          title: "Shipping",
          content: shipping ?? (
            <p>
              Orders ship in 2–3 business days via USPS. Free shipping over $40
              (US only).
            </p>
          ),
          defaultOpen: true,
        },
        {
          id: "returns",
          title: "Returns",
          content: returns ?? (
            <p>
              Unopened items can be returned within 30 days. Contact support for
              assistance.
            </p>
          ),
        },
      ]}
    />
  );
}
