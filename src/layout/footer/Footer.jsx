import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";

export default function Footer() {
  const navigate = useNavigate();
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
      </BottomNavigation>
    </Paper>
  );
}
