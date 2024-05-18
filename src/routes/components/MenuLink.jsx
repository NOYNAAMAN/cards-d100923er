import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "../../providers/CustomThemeProvaider";
import NavBarLink from "../../components/NavBarLink";

const MenuLink = ({ text, navigateTo, onClick }) => {
  const { isDark } = useTheme();
  const textColor = isDark ? "#fff" : "#000";

  return (
    <NavBarLink to={navigateTo}>
      <MenuItem component="div" onClick={onClick} style={{ color: textColor }}>
        {text}
      </MenuItem>
    </NavBarLink>
  );
};

export default MenuLink;
