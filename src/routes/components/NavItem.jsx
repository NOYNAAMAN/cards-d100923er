import React from "react";

import { Button, Typography } from "@mui/material";
import NavBarLink from "../../components/NavBarLink";
export default function NavItem({ to, sx, label }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}
