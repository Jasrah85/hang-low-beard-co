import Container from "@/components/layout/Container";
import Link from "next/link";

export default function RootFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200 dark:border-stone-800">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Hang Low Beard Co.</div>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Handcrafted beard balms and grooming essentials.
            </p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Shop</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/products" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/scents" className="hover:underline">
                  Scents
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Help</div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Follow</div>
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="rounded-xl border border-stone-300 p-2 hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800"
              >
                {/* Instagram icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-xl border border-stone-300 p-2 hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 22v-8h2.5l.5-3H13V9.5c0-.9.3-1.5 1.6-1.5H16V5.2c-.3 0-1 0-2 0-2.4 0-4 1.4-4 4V11H8v3h2v8h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-200 pt-6 text-xs text-stone-500 dark:border-stone-800">
          © {new Date().getFullYear()} Hang Low Beard Co. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
