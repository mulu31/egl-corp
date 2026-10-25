import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_THRESHOLD = 600;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLongEnough, setIsPageLongEnough] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkState = () => {
      // Check if the page is long enough to warrant a back to top button
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      // If page is less than 1.5x viewport height, don't show
      const longEnough = scrollHeight > clientHeight * 1.5;

      setIsPageLongEnough(longEnough);

      // Only visible if scrolled down AND page is long enough
      if (longEnough) {
        setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      } else {
        setIsVisible(false);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        checkState();
        ticking = false;
      });
    };

    // Run on mount and on resize (in case layout shifts)
    checkState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  if (!isPageLongEnough) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-opacity hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <FiArrowUp aria-hidden="true" size={20} />
    </button>
  );
}
