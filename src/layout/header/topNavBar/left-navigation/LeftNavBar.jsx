import { Box, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavItem from "../../../../components/NavItem";
import ROUTES from "../../../../routes/routerModel";
import { useUser } from "../../../../users/providers/UserProviders";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import SearchMenu from "../rightnavigation/SearchMenu";
import { useTheme } from "../../../../providers/CustomThemeProvaider";

export default function LeftNavBar() {
  const { user } = useUser();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { isDark, toggleDarkMode } = useTheme();

  if (isMobile) {
    return (
      <Box className="box-Menu">
        <LogoIcon />

        <NavItem to={ROUTES.ABOUT} label={"About"} />

        {user && user.isAdmin && <NavItem to={ROUTES.ADMIN} label={"Admin"} />}
        <SearchMenu />
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    );
  }

  return (
    <Box className="box-Menu">
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.ABOUT} label={"About"} />
      {user ? <NavItem to={ROUTES.FAV_CARDS} label={"Favorite Cards"} /> : null}
      {user && (user.isBusiness || user.isAdmin) && (
        <NavItem to={ROUTES.MY_CARDS} label={"My Cards"} />
      )}
    </Box>
  );
}
