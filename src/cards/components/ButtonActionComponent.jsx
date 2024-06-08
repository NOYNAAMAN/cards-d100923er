import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";

export default function ButtonActionComponent({ icon }) {
  const navigate = useNavigate();
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right: 16,
      }}
      onClick={() => {
        icon === "Add" && navigate(ROUTES.CREATE_CARD);
        icon === "Edit" && navigate(ROUTES.EDIT_ACCOUNT);
      }}
    >
      {icon === "Add" && <AddIcon />}
      {icon === "Edit" && <EditIcon />}
    </Fab>
  );
}
