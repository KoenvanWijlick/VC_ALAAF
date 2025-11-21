import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export interface SidebarItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  title?: string;
  items: SidebarItem[];
  className?: string;
}

export function Sidebar({ title, items, className }: SidebarProps) {
  return (
    <aside className={cn("ui-sidebar", className)}>
      {title && <h3>{title}</h3>}
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
