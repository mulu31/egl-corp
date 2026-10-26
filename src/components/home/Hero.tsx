import { SITE } from "@/config/site";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function useResponsiveVideoSource() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const checkSource = () => {
      const width = window.innerWidth;
      let selected = SITE.heroVideo.desktop;
      if (width < 768 && SITE.heroVideo.mobile)
        selected = SITE.heroVideo.mobile;
      else if (width >= 768 && width < 1024 && SITE.heroVideo.tablet)
        selected = SITE.heroVideo.tablet;
      setSource(selected || null);
    };
    checkSource();
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkSource, 250);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return source;
}

export function Hero() {
  const videoSource = useResponsiveVideoSource();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {videoSource && !prefersReducedMotion ? (
          <div className="absolute inset-0 h-full w-full overflow-hidden opacity-80 dark:opacity-60">
            {/*
              Using 16:9 aspect ratio for the iframe and scaling it to cover.
              Removed 'scale-150' as it often pushes the video out of bounds.
            */}
            <iframe
              src={`https://www.youtube.com/embed/${videoSource}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoSource}&playsinline=1&modestbranding=1&showinfo=0&rel=0`}
              title="Background video"
              className="absolute left-1/2 top-1/2 h-[100vh] w-[177.77vh] min-h-[56.25vw] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
              allow="autoplay; encrypted-media"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        ) : (
          // Fallback pattern if no video or reduced motion is preferred
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950" />
        )}
      </div>

      {/* Theme-Aware Overlays (Lighter than before to let video show) */}
      <div className="absolute inset-0 z-10 bg-slate-950/40 dark:bg-slate-950/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
          {SITE.tagline}
        </p>
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
          Software Built for What's Next.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 [text-shadow:0_1px_5px_rgba(0,0,0,0.6)]">
          {SITE.description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="focus-ring-orange rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Start a Project
          </Link>
          <Link
            to="/services"
            className="focus-ring-orange rounded-md border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
