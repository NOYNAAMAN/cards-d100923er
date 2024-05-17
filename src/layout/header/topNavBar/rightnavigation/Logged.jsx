import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useMenu } from "../menu/MenuProvider";

export default function Logged() {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open settings">
      <IconButton onClick={() => setOpen(true)}>
        <Avatar
          alt="Avatar Icon"
          src="/assets/imgs/avatarLogin.png"
          sx={{ border: "2px solid #DDEBF6", width: 40, height: 40 }}
        />
      </IconButton>
    </Tooltip>
  );
}
