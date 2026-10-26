import { PageContainer } from "../PageContainer";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const INNER_TECH = [SiReact, SiTypescript, SiVite];
const OUTER_TECH = [
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiFigma,
];

export function TechOrbit() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <PageContainer>
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-2">
            Our Stack
          </p>
          <h2 className="font-serif text-4xl font-semibold">
            Technologies We Master
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We use modern, battle-tested tools to build robust and scalable
            software solutions.
          </p>
        </div>

        <div className="relative flex h-[400px] w-full items-center justify-center">
          {/* Center Logo/Mark */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-orange-600 text-4xl shadow-[0_0_40px_rgba(249,115,22,0.4)]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10 text-white"
            >
              <path d="M12 2L2 22h20L12 2zm0 4.5l7.5 15h-15L12 6.5z" />
            </svg>
          </div>

          {/* Inner Orbit */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="relative h-64 w-64 rounded-full border border-slate-800">
              {INNER_TECH.map((Icon, i) => {
                const angle = (i / INNER_TECH.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-2xl text-slate-300"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(128px) rotate(-${angle}deg)`,
                    }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Outer Orbit */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
            <div className="relative h-[380px] w-[380px] rounded-full border border-slate-800">
              {OUTER_TECH.map((Icon, i) => {
                const angle = (i / OUTER_TECH.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-2xl text-slate-300"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(190px) rotate(-${angle}deg)`,
                    }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
