"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ToastMsg = {
  id: string;
  title?: string;
  message: string;
  timeout?: number;
};

type ToastCtx = {
  push: (msg: Omit<ToastMsg, "id">) => void;
};

const ToastContext = createContext<ToastCtx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

  const push = useCallback((msg: Omit<ToastMsg, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const t: ToastMsg = { id, timeout: 3500, ...msg };
    setToasts((prev) => [...prev, t]);
    setTimeout(
      () => setToasts((prev) => prev.filter((x) => x.id !== id)),
      t.timeout,
    );
  }, []);

  const value = useMemo(() => ({ push }), [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-80 flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto rounded-xl border border-stone-200 bg-white p-4 shadow-lg dark:border-stone-800 dark:bg-stone-900"
          >
            {t.title && (
              <div className="mb-1 text-sm font-semibold">{t.title}</div>
            )}
            <div className="text-sm text-stone-700 dark:text-stone-200">
              {t.message}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
