import { Link } from "react-router";
import { FOOTER_NAV } from "@/lib/navigation";
import { SITE } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold text-slate-900">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm font-medium text-blue-600">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {SITE.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium text-slate-900">
              Have a project in mind?
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-block rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
