import { Avatar, IconButton } from "@mui/material";
import React from "react";

import ROUTES from "../../../../routes/routerModel";
import NavBarLink from "../../../../components/NavBarLink";

export default function LogoIcon() {
  return (
    <NavBarLink to={ROUTES.ROOT}>
      <IconButton>
        <Avatar
          alt="Avatar Icon"
          src="/assets/imgs/avatar.jpeg"
          sx={{ border: "2px solid #DDEBF6", width: 40, height: 40 }}
        />
      </IconButton>
    </NavBarLink>
  );
}
