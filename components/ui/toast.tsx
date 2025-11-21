"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type ToastIntent = "info" | "success" | "danger";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  intent?: ToastIntent;
  duration?: number;
}

interface ToastContextValue {
  push: (toast: Omit<ToastMessage, "id">) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const push = React.useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...toast }]);
    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, toast.duration ?? 4000);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="ui-toast-stack" aria-live="polite" aria-atomic="true">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn("ui-toast")}
            style={{
              borderColor:
                toast.intent === "success"
                  ? "var(--color-success)"
                  : toast.intent === "danger"
                    ? "var(--color-danger)"
                    : "var(--color-border)",
            }}
          >
            <strong>{toast.title}</strong>
            {toast.description && <p>{toast.description}</p>}
            <button
              className="ui-button ui-button--ghost"
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            >
              Close
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
}
