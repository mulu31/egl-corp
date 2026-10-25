import type { IconType } from "react-icons";
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiFileText,
  FiMail,
} from "react-icons/fi";

export interface NavItem {
  label: string;
  to: string;
  icon?: IconType;
}

export const PRIMARY_NAV: readonly NavItem[] = [
  { label: "Home", to: "/", icon: FiHome },
  { label: "About Us", to: "/about", icon: FiInfo },
  { label: "Services", to: "/services", icon: FiBriefcase },
  { label: "Blogs & Events", to: "/blogs", icon: FiFileText },
  { label: "Contact", to: "/contact", icon: FiMail },
] as const;

export const FOOTER_NAV: readonly NavItem[] = [
  ...PRIMARY_NAV,
  { label: "Privacy Policy", to: "/privacy" },
] as const;
