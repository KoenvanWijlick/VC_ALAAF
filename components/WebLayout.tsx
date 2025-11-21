import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/WagenPage", label: "Wagens" },
  { href: "/sponsoren", label: "Sponsoren" },
];

export default function WebLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + NAV_ITEMS.length) % NAV_ITEMS.length;
    navRefs.current[nextIndex]?.focus();
  };

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="layout-shell">
      <a href="#main-content" className="skip-link">
        Naar de inhoud
      </a>
      <header className="ui-navbar">
        <div className="ui-navbar__inner">
          <Link href="/" className="brand" aria-label="VC AL-AAF, ga naar home">
            <span className="brand-mark">VC</span>
            <span className="brand-type">AL-AAF</span>
          </Link>
          <nav
            id="site-nav"
            className="ui-navbar__menu"
            data-open={menuOpen}
            aria-label="Hoofd navigatie"
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href && "nav-link--active"
                )}
                tabIndex={0}
                ref={(node) => (navRefs.current[index] = node)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item.label}
              </Link>
            ))}
            <div className="nav-cta">
              <ThemeToggle />
            </div>
          </nav>
          <Button
            className="ui-navbar__toggle"
            variant="ghost"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </Button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <p className="brand-type">VC AL-AAF</p>
            <p>Vrijwilligers uit Venlo die samen vakwerk leveren tijdens de vastelaovend.</p>
          </div>
          <div>
            <strong>Contact</strong>
            <p>Nieuwstraat 12, Venlo</p>
            <p>info@vc-alaaf.nl</p>
          </div>
          <div>
            <strong>Volg ons</strong>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} VC AL-AAF. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}
