import { useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { PRIMARY_NAV } from "../lib/navigation";
import { SITE } from "../config/site";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNavSheet } from "./MobileNavSheet";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {SITE.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex md:items-center md:gap-6"
        >
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Link
            to="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-block"
          >
            Start a Project
          </Link>
          <button
            ref={triggerRef}
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-sheet"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu aria-hidden="true" size={22} />
          </button>
        </div>
      </div>

      <MobileNavSheet
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={triggerRef}
      />
    </header>
  );
}
