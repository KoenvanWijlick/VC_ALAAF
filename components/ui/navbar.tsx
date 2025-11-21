"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/cn";

export interface NavItem {
  href: string;
  label: string;
}

interface NavbarProps {
  brand: React.ReactNode;
  cta?: { label: string; href: string };
  items: NavItem[];
}

export function Navbar({ brand, cta, items }: NavbarProps) {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <header className="ui-navbar">
      <div className="ui-navbar__inner">
        <div>{brand}</div>
        <nav ref={menuRef} className="ui-navbar__menu" data-open={open}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          {cta && (
            <Button asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </nav>
        <Button
          variant="ghost"
          className="ui-navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </Button>
      </div>
    </header>
  );
}
