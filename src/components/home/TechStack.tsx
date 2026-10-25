import { PageContainer } from "../PageContainer";

const TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "React Router",
  "PostgreSQL",
  "REST APIs",
];

export function TechStack() {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <PageContainer>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Tools and Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {TECHNOLOGIES.map((tech) => (
            <span key={tech} className="text-lg font-medium text-foreground/70">
              {tech}
            </span>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
