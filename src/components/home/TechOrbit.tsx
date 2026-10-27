import { Logo } from "@/components/Logo";
import { PageContainer } from "@/components/PageContainer";
import {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGo,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSentry,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

// Orbit 1: Core stack (Closest to center)
const ORBIT_1 = [SiReact, SiTypescript, SiVite, SiTailwindcss];

// Orbit 2: Backend & Database
const ORBIT_2 = [
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiRedis,
  SiPython,
];

// Orbit 3: DevOps & Extended Ecosystem (Furthest out)
const ORBIT_3 = [
  SiDocker,
  SiGithub,
  SiVercel,
  SiFigma,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiGo,
  SiStripe,
  SiSentry,
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

        {/* Container height matches the largest orbit diameter + padding */}
        <div className="relative flex h-[600px] w-full items-center justify-center">
          {/* Center Logo */}
          <div className="relative z-30 flex h-28 w-28 items-center justify-center rounded-full bg-slate-950 border-2 border-slate-700 shadow-[0_0_60px_rgba(249,115,22,0.3)]">
            <Logo variant="icon" theme="dark" asLink={false} />
          </div>

          {/* Orbit 1 - Inner (Fastest, Clockwise) */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite] pointer-events-none">
            <div className="relative h-[220px] w-[220px] rounded-full border border-slate-800/80">
              {ORBIT_1.map((Icon, i) => {
                const angle = (i / ORBIT_1.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-2xl text-slate-200 shadow-lg animate-[spin_20s_linear_infinite_reverse]"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
                    }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Orbit 2 - Middle (Slow, Counter-Clockwise) */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse] pointer-events-none">
            <div className="relative h-[380px] w-[380px] rounded-full border border-slate-800/60">
              {ORBIT_2.map((Icon, i) => {
                const angle = (i / ORBIT_2.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-2xl text-slate-200 shadow-lg animate-[spin_40s_linear_infinite]"
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

          {/* Orbit 3 - Outer (Medium, Clockwise) */}
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite] pointer-events-none">
            <div className="relative h-[520px] w-[520px] rounded-full border border-slate-800/40">
              {ORBIT_3.map((Icon, i) => {
                const angle = (i / ORBIT_3.length) * 360;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-xl text-slate-300 shadow-lg animate-[spin_30s_linear_infinite_reverse]"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(260px) rotate(-${angle}deg)`,
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
