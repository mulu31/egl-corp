export interface PageIntroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageIntro({ title, description, eyebrow }: PageIntroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-600">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}
