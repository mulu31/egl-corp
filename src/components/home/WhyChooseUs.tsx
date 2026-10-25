import { PageContainer } from "../PageContainer";
import { SectionSeparator } from "../SectionSeparator";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Engineering clarity in complex problems.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Software should solve operational friction, not create it. We
              approach every project by deeply understanding your workflows and
              constraints before writing a single line of code.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our focus is on building software that your team can actually use,
              maintain, and grow with over time.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Practical, business-oriented development",
                text: "We align technical decisions with your actual business goals, not just trends.",
              },
              {
                title: "Responsive communication",
                text: "Clear updates, direct collaboration, and no vague promises.",
              },
              {
                title: "Quality assurance built-in",
                text: "Testing and stability are integrated into the process, not bolted on at the end.",
              },
              {
                title: "Support and ongoing improvement",
                text: "We remain available to iterate, maintain, and scale the systems we build.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
