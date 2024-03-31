import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../components/NavItem";
import { Outlet } from "react-router-dom";

export default function Component() {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem to="myboxsize" label="BOX-Size" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
