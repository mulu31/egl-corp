import { PageContainer } from "../PageContainer";

// DUMMY DATA — Replace with actual verified metrics before launch
const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Satisfaction Rate" },
];

export function StatsBand() {
  return (
    <section className="border-b border-border bg-muted/30 py-12 sm:py-16">
      <PageContainer>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <dd className="font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageContainer>
    </section>
  );
}
