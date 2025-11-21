import * as React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "success" | "danger" | "warning";
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn("ui-badge", className)}
      data-tone={tone}
      style={{
        background:
          tone === "success"
            ? "var(--color-success)"
            : tone === "danger"
              ? "var(--color-danger)"
              : tone === "warning"
                ? "var(--color-warning)"
                : "var(--color-primary-muted)",
        color: tone === "neutral" ? "var(--color-primary-strong)" : "var(--color-surface)",
      }}
      {...props}
    />
  );
}
