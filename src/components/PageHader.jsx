import { Divider, Typography } from "@mui/material";
import React from "react";

export default function PageHader({ titel, subtitle }) {
  return (
    <>
      <Typography variant="h1" component="h1">
        {titel}
      </Typography>

      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>

      <Divider sx={{ my: 2 }}></Divider>
    </>
  );
}
