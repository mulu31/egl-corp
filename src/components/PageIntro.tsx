import { PageContainer } from "./PageContainer";

export interface PageIntroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageIntro({ title, description, eyebrow }: PageIntroProps) {
  return (
    <section className="border-b border-border bg-background">
      <PageContainer>
        <div className="py-16 sm:py-20">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
