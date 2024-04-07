import { Box, Typography } from "@mui/material";
import React from "react";
import UseResizeWindow from "./hooks/UseResizeWindow";

export default function ResizeWindow() {
  const windowSize = UseResizeWindow();
  console.log(windowSize);
  return (
    <Box>
      <Typography>The current window width is: {windowSize.width}</Typography>
      <Typography>The current window height is: {windowSize.height}</Typography>
    </Box>
  );
}
