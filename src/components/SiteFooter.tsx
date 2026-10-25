import { Link } from "react-router";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { SITE } from "../config/site";

// Replace these with the actual verified social links when available
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
    <footer className="border-t border-border bg-background pt-16 pb-8 text-center md:text-left">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Contact Details Column */}
          <div className="flex flex-col items-center md:items-start w-full max-w-xs">
            <h3 className="font-serif text-xl font-semibold text-foreground border-b-2 border-orange-500 pb-2 mb-6 inline-block">
              Contact Details
            </h3>
            <p className="text-sm font-medium text-foreground mb-4">
              {SITE.name} Higher Secondary School
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FiMapPin className="text-orange-500 shrink-0" size={16} />
                <a
                  href="#"
                  className="hover:text-foreground transition-colors border-b border-transparent hover:border-muted-foreground"
                >
                  Find us on Google Maps
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FiMail className="text-orange-500 shrink-0" size={16} />
                <a
                  href="mailto:info@adeamodel.edu.et"
                  className="hover:text-foreground transition-colors border-b border-transparent hover:border-muted-foreground"
                >
                  info@adeamodel.edu.et
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FiPhone className="text-orange-500 shrink-0" size={16} />
                <a
                  href="tel:+251000000000"
                  className="hover:text-foreground transition-colors border-b border-transparent hover:border-muted-foreground"
                >
                  +251 000 000 000
                </a>
              </li>
            </ul>
          </div>

          {/* Center Logo & Socials */}
          <div className="flex flex-col items-center gap-6">
            {/* Note: Replace this div with your actual logo img tag if available */}
            <div className="bg-white p-2 rounded-sm shadow-sm">
              <span className="font-serif text-2xl font-bold text-green-700 tracking-tighter">
                ADEA{" "}
                <span className="text-xs block text-center font-sans font-normal text-green-600 tracking-normal mt-1">
                  MODEL SECONDARY SCHOOL
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center md:items-start w-full max-w-xs">
            <h3 className="font-serif text-xl font-semibold text-foreground border-b-2 border-orange-500 pb-2 mb-6 inline-block">
              Quick Links
            </h3>
            <nav aria-label="Footer Quick Links">
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities"
                    className="hover:text-foreground transition-colors"
                  >
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clubs"
                    className="hover:text-foreground transition-colors"
                  >
                    Clubs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/announcements"
                    className="hover:text-foreground transition-colors"
                  >
                    Announcements
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:gap-6 md:text-left">
          <p className="max-w-xs text-center md:text-left">
            A premium educational institution dedicated to academic excellence
            and holistic development.
          </p>
          <p className="text-center md:text-left">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Developed by{" "}
            <span className="font-medium text-foreground">Mulu Beshada</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
