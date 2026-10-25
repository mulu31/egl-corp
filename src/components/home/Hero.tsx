import { useEffect, useState } from "react";
import { Link } from "react-router";
import { SITE } from "../../config/site";
import { PageContainer } from "../PageContainer";

function useResponsiveVideoSource() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const checkSource = () => {
      const width = window.innerWidth;
      let selected = SITE.heroVideo.desktop;

      if (width < 768 && SITE.heroVideo.mobile) {
        selected = SITE.heroVideo.mobile;
      } else if (width >= 768 && width < 1024 && SITE.heroVideo.tablet) {
        selected = SITE.heroVideo.tablet;
      }

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
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoSource && !prefersReducedMotion ? (
          <div className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
            <iframe
              src={`https://www.youtube.com/embed/${videoSource}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoSource}&playsinline=1`}
              title="Background video"
              className="absolute left-1/2 top-1/2 h-[100vh] w-[177.77vh] min-h-[56.25vw] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 border-0"
              allow="autoplay; encrypted-media"
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950" />
        )}
      </div>

      {/* Readability Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      {/* Content */}
      <PageContainer>
        <div className="relative z-20 max-w-3xl py-24 sm:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-orange-500">
            {SITE.tagline}
          </p>
          <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Software Built for What's Next.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {SITE.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start a Project
            </Link>
            <Link
              to="/projects"
              className="rounded-md border border-slate-600 bg-slate-800/50 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
