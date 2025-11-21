"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Dialog({ open, onOpenChange, title, description, children, footer }: DialogProps) {
  if (typeof document === "undefined") return null;
  if (!open) return null;

  return createPortal(
    <>
      <div className="ui-dialog-overlay" role="presentation" onClick={() => onOpenChange(false)} />
      <div className="ui-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <header>
          <h2 id="dialog-title">{title}</h2>
          {description && <p>{description}</p>}
        </header>
        <div>{children}</div>
        {footer && <footer style={{ marginTop: "var(--space-md)" }}>{footer}</footer>}
      </div>
    </>,
    document.body
  );
}

export function useDialog(initial = false) {
  const [open, setOpen] = React.useState(initial);
  return {
    open,
    setOpen,
    dialogProps: { open, onOpenChange: setOpen },
  };
}

interface SheetProps extends DialogProps {
  position?: "left" | "right" | "bottom";
}

export function Sheet({
  position = "right",
  open,
  onOpenChange,
  title,
  description,
  children,
}: SheetProps) {
  if (typeof document === "undefined") return null;
  if (!open) return null;

  return createPortal(
    <>
      <div className="ui-dialog-overlay" onClick={() => onOpenChange(false)} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        className={cn("ui-dialog", "ui-sheet")}
        style={{
          top: position === "bottom" ? "auto" : "0",
          bottom: position === "bottom" ? "0" : "auto",
          left: position === "left" ? "0" : position === "right" ? "auto" : "50%",
          right: position === "right" ? "0" : "auto",
          transform:
            position === "bottom"
              ? "translate(-50%, 0)"
              : position === "left"
                ? "translate(0, 0)"
                : position === "right"
                  ? "translate(0, 0)"
                  : "translate(-50%, -50%)",
          maxWidth: position === "bottom" ? "100%" : "400px",
          width: position === "bottom" ? "100%" : "380px",
          height: position === "bottom" ? "60vh" : "100vh",
          borderRadius: position === "bottom" ? "var(--radius-lg) var(--radius-lg) 0 0" : "0",
        }}
      >
        <h2 id="sheet-title">{title}</h2>
        {description && <p>{description}</p>}
        <div style={{ marginTop: "var(--space-md)" }}>{children}</div>
      </div>
    </>,
    document.body
  );
}

interface PopoverProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
}

export function Popover({ trigger, children }: PopoverProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLElement | null>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  const handleToggle = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({ x: rect.left + rect.width / 2, y: rect.bottom + 8 });
    setOpen((prev) => !prev);
  };

  const cloned = React.cloneElement(trigger, {
    ref: (node: HTMLElement) => {
      ref.current = node;
      const { ref: childRef } = trigger as any;
      if (typeof childRef === "function") childRef(node);
      else if (childRef) childRef.current = node;
    },
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      trigger.props.onClick?.(event);
      handleToggle();
    },
    "aria-expanded": open,
  });

  return (
    <>
      {cloned}
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="ui-card ui-popover"
            style={{
              position: "fixed",
              top: coords.y,
              left: coords.x,
              transform: "translate(-50%, 0)",
              minWidth: "220px",
            }}
          >
            {children}
            <button
              className="ui-button ui-button--ghost"
              style={{ width: "100%", marginTop: "var(--space-sm)" }}
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
