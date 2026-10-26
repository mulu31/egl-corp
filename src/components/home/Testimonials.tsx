import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TESTIMONIALS } from "@/data/homeData";
import { PageContainer } from "@/components/PageContainer";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-muted/30">
      <PageContainer>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-background shadow-xl flex flex-col md:flex-row min-h-[500px]">
          {/* Left Panel - Navy Background with Quote */}
          <div className="relative w-full md:w-[40%] bg-[#0a192f] p-10 md:p-16 flex flex-col justify-center overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-10 left-10 opacity-20">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11H6V7H10V11ZM20 11H16V7H20V11ZM10 11C10 15.4183 6.41828 19 2 19V21C6.1063 21 9.75193 18.9236 11.8308 15.7738C12.5654 14.6782 13 13.3818 13 12V11H10ZM20 11C20 15.4183 16.4183 19 12 19V21C16.1063 21 19.7519 18.9236 21.8308 15.7738C22.5654 14.6782 23 13.3818 23 12V11H20Z"
                  fill="#14B8A6"
                />
              </svg>
            </div>

            {/* Dotted Pattern Overlay */}
            <div
              className="absolute bottom-10 left-10 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "12px 12px",
                width: "120px",
                height: "120px",
              }}
            />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
                What Our <br />
                Customers <br />
                Are Saying
              </h2>
            </div>
          </div>

          {/* Right Panel - Testimonial Content */}
          <div className="w-full md:w-[60%] p-10 md:p-16 flex flex-col items-center justify-center text-center bg-background relative">
            {/* Quote Content */}
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-medium text-foreground mb-4">
                {activeTestimonial.role}, {activeTestimonial.company}
              </h3>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-400" size={16} />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base mb-10">
                "{activeTestimonial.quote}"
              </p>
            </div>

            {/* Avatar Carousel */}
            <div className="relative mt-auto w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
              <button
                onClick={prev}
                className="focus-ring-orange absolute left-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>

              <div className="flex items-center justify-center gap-3 sm:gap-5">
                {TESTIMONIALS.map((t, i) => {
                  // Create a perspective effect: previous, active, next
                  const isActive = i === activeIndex;

                  // Only show up to 5 avatars near the active index to prevent overflow on mobile
                  // A simple approach: show all on desktop, but hide far ones on mobile.
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveIndex(i)}
                      className={`focus-ring-orange relative rounded-full transition-all duration-300 ${
                        isActive
                          ? "h-16 w-16 ring-4 ring-orange-500 ring-offset-2 ring-offset-background scale-110 z-10"
                          : "h-10 w-10 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 hidden sm:block"
                      }`}
                      aria-label={`View testimonial from ${t.name}`}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              <button
                onClick={next}
                className="focus-ring-orange absolute right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* Author Info */}
            <div className="mt-6 text-center">
              <p className="font-serif font-bold text-foreground">
                {activeTestimonial.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activeTestimonial.role} @ {activeTestimonial.company}
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
