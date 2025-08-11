// src/app/(site)/scents/page.tsx
import Container from "@/components/layout/Container";
import ScentGrid from "@/components/scents/ScentGrid";

export default function ScentsPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-2xl font-bold">Scents</h1>
      <ScentGrid />
    </Container>
  );
}
