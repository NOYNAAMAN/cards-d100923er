import { Divider, Typography } from "@mui/material";
import React from "react";
import "../styling/css/style.css";

export default function PageHader({ titel, subtitle }) {
  return (
    <>
      <Typography variant="h3" component="h1" className="typograph">
        {titel}
      </Typography>

      <Typography variant="h5" component="h2" className="typograph">
        {subtitle}
      </Typography>

      <Divider sx={{ my: 2 }}></Divider>
    </>
  );
}
