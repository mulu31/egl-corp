import { FiChevronDown } from "react-icons/fi";
import { FAQS } from "../../data/faqs";
import { PageContainer } from "../PageContainer";

export function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <PageContainer>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            How we work and what you can expect when starting a project.
          </p>

          <div className="mt-12 divide-y divide-border rounded-lg border border-border bg-background">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-medium text-foreground hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
