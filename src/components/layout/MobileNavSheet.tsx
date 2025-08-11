"use client";

export default function MobileNavSheet({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] translate-x-0 bg-white p-6 shadow-2xl transition dark:bg-stone-900">
        {children}
      </div>
    </div>
  );
}
