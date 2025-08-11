// src/app/(site)/contact/page.tsx
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-2xl font-bold">Contact</h1>
      <ContactForm />
    </Container>
  );
}
