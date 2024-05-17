import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import useCards from "../hooks/useCards";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  const { handleCreateCard } = useCards();
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
        navigate(ROUTES.CREATE_CARD);
        handleCreateCard();
      }}
    >
      <AddIcon />
    </Fab>
  );
}
