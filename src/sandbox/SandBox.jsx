import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../components/NavItem";
import { Outlet } from "react-router-dom";

export default function SandBox() {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem to="counter" label="Counter Page" />
          <NavItem to="BOX" label="Box-XS" />
          <NavItem to="life" label="LifeCycle" />
          <NavItem to="countries" label="Countries List" />
          <NavItem to="form" label="Form" />
          <NavItem to="resize" label="resize" />

          <NavItem to="optimization" label="Optimization" />
          <NavItem to="context" label="context" />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
