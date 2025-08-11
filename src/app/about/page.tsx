// src/app/(site)/about/page.tsx
import Container from "@/components/layout/Container";
import RichText from "@/components/content/RichText";

export default function AboutPage() {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-2xl font-bold">About</h1>
      <RichText>
        <p>
          Hang Low Beard Co. crafts small-batch beard balms using clean
          ingredients and subtle, everyday scents.
        </p>
        <p>
          Every tin is hand poured and tested for a soft hold with a natural
          finish—never greasy.
        </p>
      </RichText>
    </Container>
  );
}
