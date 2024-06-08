import { Link } from "react-router-dom";
import React from "react";

export default function NavBarLink({ children, to, sx = { color: "#fff" } }) {
  return (
    <Link to={to} style={{ textDecoration: "none", ...sx }}>
      {children}
    </Link>
  );
}
