import React from "react";
import { CardActions, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardActionBar({
  handleCardDelete,
  handleCardlike,
  cardId,
}) {
  const handleCardEdit = (id) => {
    console.log("Navigate to edit page for card", id);
  };
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton
          onClick={() => {
            handleCardDelete(cardId);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(cardId)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            handleCardlike(cardId);
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}
