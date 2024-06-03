import { Box } from "@mui/material";
import React from "react";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../components/NavItem";
import ROUTES from "../../../../routes/routerModel";
import { useUser } from "../../../../users/providers/UserProviders";

export default function LeftNavBar() {
  const { user } = useUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <NavItem to={ROUTES.ABOUT} label={"About"} />
      {user ? <NavItem to={ROUTES.FAV_CARDS} label={"Favorite Cards"} /> : null}
      {user && (user.isBusiness || user.isAdmin) && (
        <NavItem to={ROUTES.MY_CARDS} label={"My Cards"} />
      )}
      {user && user.isAdmin && (
        <NavItem to={ROUTES.SANDBOX} label={"Sandbox"} />
      )}
    </Box>
  );
}
