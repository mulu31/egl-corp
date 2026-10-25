import { Link } from "react-router";
import {
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiLink,
  FiCheckCircle,
} from "react-icons/fi";
import { SERVICES, type ServiceIconKey } from "../../data/services";
import { PageContainer } from "../PageContainer";

const ICON_MAP: Record<ServiceIconKey, React.ElementType> = {
  web: FiGlobe,
  mobile: FiSmartphone,
  systems: FiServer,
  automation: FiLink,
  maintenance: FiCheckCircle,
};

export function ServicesOverview() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <PageContainer>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we build
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              End-to-end engineering services focused on delivering reliable,
              scalable software.
            </p>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View all services &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconKey];
            return (
              <Link
                key={service.slug}
                to={service.href}
                className="group flex flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-4 text-sm font-medium text-primary flex items-center gap-1">
                  Learn more{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
