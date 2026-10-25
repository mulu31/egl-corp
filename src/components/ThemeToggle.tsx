import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../lib/theme";

export function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {isDark ? (
        <FiSun aria-hidden="true" size={18} />
      ) : (
        <FiMoon aria-hidden="true" size={18} />
      )}
    </button>
  );
}
