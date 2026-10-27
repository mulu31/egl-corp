import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { Link } from "react-router";
import { SITE } from "../config/site";
import { PRIMARY_NAV } from "../lib/navigation";
import { Logo } from "./Logo";

const SOCIAL_LINKS = [
  { icon: FiTwitter, href: "#", label: "X (Twitter)" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 text-center lg:text-left">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Contact Details Column */}
          <div className="flex w-full max-w-xs flex-col items-center lg:items-start">
            <h3 className="mb-6 inline-block border-b-2 border-orange-500 pb-2 font-serif text-xl font-semibold text-foreground">
              Contact Details
            </h3>
            <p className="mb-4 text-sm font-medium text-foreground hidden sm:block">
              <Logo variant="full" asLink={false} />
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <FiMapPin className="shrink-0 text-orange-500" size={16} />
                <span className="border-b border-transparent hover:border-muted-foreground">
                  Location details coming soon
                </span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <FiMail className="shrink-0 text-orange-500" size={16} />
                <span className="border-b border-transparent hover:border-muted-foreground">
                  Contact via form
                </span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <FiPhone className="shrink-0 text-orange-500" size={16} />
                <span className="border-b border-transparent hover:border-muted-foreground">
                  Phone coming soon
                </span>
              </li>
            </ul>
          </div>

          {/* Center Logo & Socials */}
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-sm bg-white p-3 shadow-sm dark:bg-slate-900 dark:border dark:border-border">
              <Logo variant="full" asLink={false} />
            </div>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-5 focus-visible:outline-offset-6 focus-visible:outline-ring"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex w-full max-w-xs flex-col items-center lg:items-end">
            <h3 className="mb-6 inline-block border-b-2 border-orange-500 pb-2 font-serif text-xl font-semibold text-foreground">
              Quick Links
            </h3>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-4 text-sm text-muted-foreground">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="hover:text-foreground transition-colors text-center sm:text-end block w-full border-b border-transparent hover:border-muted-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground lg:flex-row lg:gap-6 lg:text-left">
          <p className="max-w-xs text-center lg:text-left">
            {SITE.description}
          </p>
          <p className="text-center lg:text-left">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-center lg:text-right">
            Developed by{" "}
            <span className="font-medium text-foreground">Mulu Beshada</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
