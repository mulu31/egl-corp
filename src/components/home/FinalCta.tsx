import { Link } from "react-router";
import { PageContainer } from "@/components/PageContainer";

export function FinalCta() {
  return (
    <section className="relative bg-[#0a192f] py-24 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-500/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500/30 rounded-full" />
      </div>

      <PageContainer>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
            Ready to build what's{" "}
            <span className="italic text-green-400">Next</span>?
          </h2>
          <p className="mt-6 text-lg text-slate-400 mb-10">
            Let's discuss your project, your constraints, and how we can
            engineer a solution that moves your business forward.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="focus-ring-orange rounded-md bg-green-500 px-8 py-3.5 text-sm font-semibold text-slate-900 hover:bg-green-400 transition-colors"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="focus-ring-orange rounded-md border border-slate-600 bg-transparent px-8 py-3.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
