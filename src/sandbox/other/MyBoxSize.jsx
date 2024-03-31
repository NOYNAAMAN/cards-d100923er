import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function MyBoxSize() {
  const [size, setSize] = useState({ width: 10, height: 10 });

  const sizeUp = () => {
    size.width < 200 && size.height < 200
      ? setSize((prev) => ({
          height: prev.height + 10,
          width: prev.width + 10,
        }))
      : (size.width = 200);
    size.height = 200;
  };

  const sizeDown = () => {
    size.width > 10 && size.height > 10
      ? setSize((prev) => ({
          height: prev.height - 10,
          width: prev.width - 10,
        }))
      : (size.width = 10);
    size.height = 10;
  };

  return (
    <>
      <Box
        sx={{ bgcolor: "pink", width: size.width, height: size.height }}
      ></Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={sizeUp}>
          {" "}
          +
        </Button>
        <Button variant="contained" onClick={sizeDown}>
          {" "}
          -
        </Button>
      </Box>
    </>
  );
}
