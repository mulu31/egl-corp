import { PageContainer } from "@/components/PageContainer";
import { STATS } from "@/data/stats"; // FIXED IMPORT
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function StatsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  // Responsive visible count handled via CSS, pagination logic remains simple
  const itemsPerPage = 2;
  const maxIndex = Math.max(0, STATS.length - itemsPerPage);

  const next = () => setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setStartIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-slate-950 py-20 text-white">
      <PageContainer>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-semibold text-white">
            By the Numbers
          </h2>
          <p className="mt-4 text-slate-400">
            Our commitment to excellence is reflected in our achievements and
            growth over the years.
          </p>
        </div>

        {/* Desktop Layout (5 cols with dividers) */}
        <div className="hidden lg:grid lg:grid-cols-5 divide-x divide-slate-800">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-4 text-center"
            >
              <stat.icon size={32} className="text-orange-500 mb-6" />
              <span className="font-serif text-5xl font-bold mb-2">
                {stat.value}
              </span>
              <span className="font-serif text-lg text-slate-200 mb-2">
                {stat.title}
              </span>
              <span className="text-sm text-slate-400">{stat.desc}</span>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 divide-x divide-slate-800/50">
            {STATS.slice(
              startIndex,
              startIndex + (window.innerWidth >= 768 ? 3 : 2),
            ).map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-2 text-center"
              >
                <stat.icon size={28} className="text-orange-500 mb-4" />
                <span className="font-serif text-4xl font-bold mb-1">
                  {stat.value}
                </span>
                <span className="font-serif text-base text-slate-200 mb-2">
                  {stat.title}
                </span>
                <span className="text-xs text-slate-400">{stat.desc}</span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="focus-ring-orange p-2 rounded-full border border-slate-700 disabled:opacity-30"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={startIndex >= maxIndex}
              className="focus-ring-orange p-2 rounded-full border border-slate-700 disabled:opacity-30"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
