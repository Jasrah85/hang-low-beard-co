// Server component: renders a structured data script tag.
export default function JsonLd<T extends Record<string, unknown>>({
  data,
}: {
  data: T;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
