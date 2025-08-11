import Container from "@/components/layout/Container";
import CartView from "@/components/cart/CartView";

export default function CartPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
      <CartView />
    </Container>
  );
}
