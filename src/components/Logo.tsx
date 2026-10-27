import { SITE } from "@/config/site";
import { Link } from "react-router";

export interface LogoProps {
  variant?: "full" | "compact" | "icon";
  theme?: "light" | "dark" | "auto";
  className?: string;
  asLink?: boolean;
}

export function Logo({
  variant = "full",
  theme = "auto",
  className = "",
  asLink = true,
}: LogoProps) {
  const textColor =
    theme === "light"
      ? "text-slate-900"
      : theme === "dark"
        ? "text-white"
        : "text-slate-900 dark:text-white";
  const subTextColor =
    theme === "light"
      ? "text-slate-600"
      : theme === "dark"
        ? "text-slate-300"
        : "text-slate-600 dark:text-slate-300";

  const content = (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Icon / Mark - Scaled up if variant is icon */}
      <div
        className={`flex shrink-0 items-center justify-center rounded bg-primary text-primary-foreground font-serif font-bold ${variant === "icon" ? "h-16 w-16 text-4xl" : "h-10 w-10 text-xl"}`}
      >
        E
      </div>

      {/* Text */}
      {variant !== "icon" && (
        <div className="flex flex-col">
          <span
            className={`font-serif text-lg font-semibold leading-none tracking-tight ${textColor}`}
          >
            {variant === "compact" ? "EGL" : SITE.name}
          </span>
          {variant === "full" && (
            <span
              className={`mt-1 text-[10px] font-medium uppercase tracking-widest ${subTextColor}`}
            >
              {SITE.tagline.split(".")[0]}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to="/"
        className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-sm"
      >
        {content}
      </Link>
    );
  }

  return content;
}
