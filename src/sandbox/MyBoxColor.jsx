import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function MyBoxColor() {
  const [style, setStyle] = useState("red");

  const changeStyle = () => {
    style !== "red" ? setStyle("red") : setStyle("blue");
  };
  return (
    <>
      <Box sx={{ bgcolor: style, width: 100, height: 100 }}></Box>
      <Button variant="contained" onClick={changeStyle}>
        {" "}
        Change Color
      </Button>
    </>
  );
}

// Filename - App.js
