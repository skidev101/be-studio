export type NavLink = {
  name: string;
  path: string;
  /** Home-page section id. Present only for in-page anchors. */
  section?: string;
};

export const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#services", section: "services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Approach", path: "#approach", section: "approach" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "#faq", section: "faq" },
];
