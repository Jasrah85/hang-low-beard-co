import { ReactNode } from "react";

export default function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}
