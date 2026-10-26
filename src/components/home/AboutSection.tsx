import { ABOUT_VALUES } from "../../data/homeData";
import { PageContainer } from "../PageContainer";

export function AboutSection() {
  return (
    <section className="bg-background py-24">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
            About
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            To be a center of engineering excellence that produces reliable,
            scalable, and impactful software.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A premium software engineering firm dedicated to technical
            excellence and holistic business development. We provide a nurturing
            environment where technology grows intellectually, functionally, and
            securely.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {ABOUT_VALUES.map((val) => (
            <div
              key={val.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-orange-500">
                <val.icon size={28} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
