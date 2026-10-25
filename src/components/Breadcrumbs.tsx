import { Link } from "react-router";
import { FiChevronRight } from "react-icons/fi";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  label?: string;
}

export function Breadcrumbs({ items, label = "Breadcrumb" }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={label} className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={`${item.label}-${i}`}
              className="flex min-w-0 items-center gap-2"
            >
              {i > 0 && (
                <FiChevronRight
                  aria-hidden="true"
                  size={14}
                  className="shrink-0 opacity-60"
                />
              )}
              {isLast || !item.to ? (
                <span
                  aria-current="page"
                  className="truncate font-medium text-foreground"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="truncate hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
