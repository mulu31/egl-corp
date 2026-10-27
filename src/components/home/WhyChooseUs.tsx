import { PageContainer } from "@/components/PageContainer";
import { WHY_US } from "@/data/about"; // FIXED IMPORT
import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

export function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const next = () => setActive((prev) => (prev + 1) % WHY_US.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? WHY_US.length - 1 : prev - 1));
  const item = WHY_US[active];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <PageContainer>
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-2">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl font-semibold">
            Engineering Excellence
          </h2>
        </div>

        {/* Desktop Layout (Overlapping Card) */}
        <div className="relative hidden md:block aspect-[21/9] w-full max-w-6xl mx-auto">
          <div className="absolute inset-y-0 right-0 w-[80%] overflow-hidden">
            {WHY_US.map((w, i) => (
              <img
                key={w.title}
                src={w.image}
                alt={w.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-full max-w-md flex items-center z-10">
            <div className="bg-[#1e293b] p-10 shadow-2xl w-full border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-medium text-sm">
                  0{active + 1} / 0{WHY_US.length}
                </span>
                <span className="text-xs border border-slate-600 px-2 py-0.5 rounded-full text-slate-300">
                  feature
                </span>
              </div>
              <h3 className="font-serif text-3xl font-semibold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed line-clamp-4">
                {item.desc}
              </p>
              <Link
                to="/about"
                className="focus-ring-orange inline-flex items-center text-sm font-medium text-white hover:text-orange-400"
              >
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="md:hidden mt-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
            {WHY_US.map((w, i) => (
              <img
                key={w.title}
                src={w.image}
                alt={w.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="bg-slate-900 p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-orange-500 font-medium text-sm">
                0{active + 1} / 0{WHY_US.length}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              {item.desc}
            </p>
            <Link
              to="/about"
              className="focus-ring-orange inline-flex items-center text-sm font-medium text-white"
            >
              Learn More <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="focus-ring-orange flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-white hover:bg-slate-800"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="focus-ring-orange flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-white hover:bg-slate-800"
            aria-label="Next"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </PageContainer>
    </section>
  );
}
