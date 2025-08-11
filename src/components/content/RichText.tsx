// Minimal rich text wrapper. Pass children (React nodes) or an HTML string.
// If you pass `html`, ensure it is sanitized on the CMS side.
export default function RichText({
  children,
  html,
}: {
  children?: React.ReactNode;
  html?: string;
}) {
  return (
    <div className="prose prose-stone max-w-none dark:prose-invert">
      {typeof html === "string" ? (
        // WARNING: only use with sanitized HTML
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        children
      )}
    </div>
  );
}
