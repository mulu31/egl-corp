import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FAQS as DEFAULT_FAQS } from "@/data/homeData";
import { PageContainer } from "@/components/PageContainer";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSectionProps {
  faqs?: readonly FaqItem[];
  title?: string;
  subtitle?: string;
}

export function FaqSection({
  faqs = DEFAULT_FAQS,
  title = "Common Questions",
  subtitle = "Find answers to frequently asked questions.",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 text-white">
      <PageContainer>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4 border-t border-[#d4a373] inline-block pt-2">
            FAQ
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-slate-400">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto border-t border-slate-800">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-slate-800">
                <button
                  onClick={() => toggle(i)}
                  className="focus-ring-orange flex w-full items-center justify-between py-6 text-left group"
                >
                  <span
                    className={`font-serif text-lg md:text-xl transition-colors ${isOpen ? "text-[#d4a373]" : "text-slate-200 group-hover:text-white"}`}
                  >
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#d4a373]" : "text-slate-400"}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
