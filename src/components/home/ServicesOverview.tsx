import { PageContainer } from "@/components/PageContainer";
import { SERVICES } from "@/data/services"; // FIXED IMPORT
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-background py-24 overflow-hidden">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden hidden lg:block order-1">
            {SERVICES.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col order-2 lg:order-2">
            <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-4">
              Services
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
              Tailored Solutions <br />
              <span className="text-orange-500">at EGL Corp</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our comprehensive engineering services are designed to nurture
              business growth, efficiency, and a lifelong love for technology.
            </p>

            <div className="space-y-2">
              {SERVICES.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={service.slug}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`relative border-l-2 transition-all duration-300 ${
                      isActive
                        ? "border-orange-500 bg-muted/50"
                        : "border-transparent"
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="focus-ring-orange flex w-full items-center gap-4 px-6 py-4 text-left"
                    >
                      <span
                        className={`font-serif text-lg font-semibold ${isActive ? "text-orange-500" : "text-muted-foreground"}`}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className={`font-serif text-xl ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {service.title}
                      </span>
                    </button>

                    {isActive && (
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.summary}
                        </p>
                        <Link
                          to={"/services/"}
                          className="focus-ring-orange inline-flex items-center text-sm font-medium text-orange-500 hover:underline rounded-sm"
                        >
                          Explore Service <FiChevronRight className="ml-1" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between px-2">
              <div className="flex items-center">
                {SERVICES.map((_, i) => (
                  <div key={i} className="flex items-center">
                    {i > 0 && <div className="h-px w-6 bg-border mx-1" />}
                    <button
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`focus-ring-orange h-3 w-3 rounded-full border transition-all duration-300 ${
                        i === activeIndex
                          ? "border-teal-500 bg-teal-500"
                          : "border-slate-400 bg-transparent hover:border-slate-600"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % SERVICES.length)
                }
                className="focus-ring-orange flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted"
                aria-label="Next service"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden block lg:hidden order-3 mt-4">
            {SERVICES.map((s, i) => (
              <img
                key={s.slug}
                src={s.image}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
