import Container from "@/components/layout/Container";
import NavBar from "@/components/layout/NavBar";

export default function RootHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-stone-800 dark:bg-stone-950/70">
      <Container>
        <NavBar />
      </Container>
    </header>
  );
}
