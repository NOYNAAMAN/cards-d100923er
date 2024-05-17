import { Box } from "@mui/material";
import React from "react";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../components/NavItem";

import ROUTES from "../../../../routes/routerModel";

export default function LeftNavBar() {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label={"Cards"} />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
      <NavItem to={ROUTES.FAV_CARDS} label={"FavoritCards"} />
      <NavItem to={ROUTES.MY_CARDS} label={"my cards"} />
      <NavItem to={ROUTES.SANDBOX} label={"Sandbox"} />
    </Box>
  );
}
