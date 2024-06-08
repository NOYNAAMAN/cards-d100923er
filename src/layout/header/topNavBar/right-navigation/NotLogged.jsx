import React from "react";
import NavItem from "../../../../components/NavItem";
import ROUTES from "../../../../routes/routerModel";
import { Box } from "@mui/material";

export default function NotLogged() {
  return (
    <Box>
      <NavItem to={ROUTES.SIGNUP} label={"signup"} />
      <NavItem to={ROUTES.LOGIN} label={"Login"} />
    </Box>
  );
}
