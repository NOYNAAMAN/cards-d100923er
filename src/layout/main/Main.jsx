import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "../../providers/CustomThemeProvaider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        minHeight: "85vh",
        bgcolor: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      {children}
    </Box>
  );
}
