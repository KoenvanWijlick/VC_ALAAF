import * as React from "react";
import { cn } from "@/lib/cn";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  caption?: string;
}

export function Table({ className, caption, children, ...props }: TableProps) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className={cn("ui-table", className)} {...props}>
        {caption && <caption>{caption}</caption>}
        {children}
      </table>
    </div>
  );
}
