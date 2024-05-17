import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/CustomThemeProvaider";
export default function NavBarLink({ sx = { color: "#000" }, children, to }) {
  const isDark = useTheme();
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", ...sx, color: isDark ? "#fff" : "#000" }}
    >
      {children}
    </Link>
  );
}
