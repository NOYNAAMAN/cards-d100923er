import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "../../providers/CustomThemeProvaider";

const MenuLink = ({ text, navigateTo, onClick }) => {
  const { isDark } = useTheme();
  const textColor = isDark ? "#fff" : "#000";

  return (
    <MenuItem
      component="div" // Use div instead of NavLink
      onClick={onClick}
      style={{ color: textColor }} // Directly apply text color
    >
      {text}
    </MenuItem>
  );
};

export default MenuLink;
