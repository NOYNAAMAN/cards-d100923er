import React from "react";
import PageHader from "../components/PageHader";
import { Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Box>
      <PageHader
        titel="About Page"
        subtitle="on this page you can find explanations about ..."
      ></PageHader>
    </Box>
  );
}
