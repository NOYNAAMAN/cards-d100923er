import { Box, IconButton } from "@mui/material";
import React from "react";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import { useUser } from "../../../../users/providers/UserProviders";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvaider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchMenu from "./SearchMenu";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user && <Logged />}
        {!user && <NotLogged />}
        <SearchMenu />
      </Box>

      <MoreButton />
    </>
  );
}
