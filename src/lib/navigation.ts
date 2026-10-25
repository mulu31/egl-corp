export interface NavItem {
  label: string;
  to: string;
}

export const PRIMARY_NAV: readonly NavItem[] = [
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
] as const;

export const FOOTER_NAV: readonly NavItem[] = [
  ...PRIMARY_NAV,
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
] as const;
