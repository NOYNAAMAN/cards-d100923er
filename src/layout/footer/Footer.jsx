import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useUser } from "../../users/providers/UserProviders";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <Paper
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "2px solid #DDEBF6",
        borderBottom: "2px solid #142E35",
      }}
      elevation={0}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="about"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />

        {user ? (
          <BottomNavigationAction
            label="Favorite"
            icon={<StyleIcon />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        ) : null}
        {(user && user.isBusiness === true) ||
        (user && user.isAdmin === true) ? (
          <BottomNavigationAction
            label="My Cards"
            icon={<AccountBoxIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
}
