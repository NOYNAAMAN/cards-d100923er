import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../components/NavBarLink";
import ROUTES from "../../../../routes/routerModel";

export default function Logo() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <Typography
        sx={{
          fontFamily: "fantasy",
          mr: 2,
          display: { xs: "none", md: "inline-flex" },
        }}
        variant="h4"
        component="h1"
      >
        BCard
      </Typography>
    </NavBarLink>
  );
}
