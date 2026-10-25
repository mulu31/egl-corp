export interface NavItem {
  label: string;
  to: string;
}

export const PRIMARY_NAV: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blogs & Events", to: "/blogs" },
  { label: "Contact", to: "/contact" },
] as const;

export const FOOTER_NAV: readonly NavItem[] = [
  ...PRIMARY_NAV,
  { label: "Privacy Policy", to: "/privacy" },
] as const;
