import * as React from "react";
import { cn } from "@/lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: boolean;
}

export function Skeleton({ className, style, rounded = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("ui-skeleton", className)}
      style={{
        borderRadius: rounded ? "var(--radius-md)" : undefined,
        minHeight: "1rem",
        ...style,
      }}
      {...props}
    />
  );
}
