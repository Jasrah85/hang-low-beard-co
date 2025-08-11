"use client";

import { useRef } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";

/**
 * For now, submits your cart to a future `/api/checkout` route as JSON.
 * Implement the API to create a Square Checkout session (or Payment Link) and redirect.
 */
export default function CheckoutButton({ disabled }: { disabled?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { lines } = useCart();
  return (
    <>
      <form
        ref={formRef}
        method="POST"
        action="/api/checkout"
        className="hidden"
      >
        <input type="hidden" name="cart" value={JSON.stringify({ lines })} />
      </form>
      <Button
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            // If you haven't built the API yet, this will 404. That's OK for now.
            formRef.current?.submit();
          }
        }}
        className="flex-1"
      >
        Checkout
      </Button>
    </>
  );
}
