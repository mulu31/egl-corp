import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { Link, NavLink } from "react-router";
import { FiX } from "react-icons/fi";
import { PRIMARY_NAV } from "../lib/navigation";
import { SITE } from "../config/site";
import { ThemeToggle } from "./ThemeToggle";

export interface MobileNavSheetProps {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function MobileNavSheet({
  open,
  onClose,
  triggerRef,
}: MobileNavSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(
      () => firstLinkRef.current?.focus(),
      50,
    );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheetRef.current) return;
      const focusables = sheetRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 motion-safe:transition-opacity motion-safe:duration-200 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={sheetRef}
        id="mobile-nav-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-y-0 left-0 z-50 flex w-[80vw] max-w-sm flex-col bg-background text-foreground shadow-xl motion-safe:animate-[egl-slide-in_0.25s_ease-out] md:hidden"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <Link
            to="/"
            onClick={onClose}
            className="font-serif text-lg font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {SITE.name}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <FiX aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-2 py-4"
        >
          <ul className="space-y-1">
            {PRIMARY_NAV.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </>
  );
}
