import React, { useState } from "react";
import { CardActions, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useUser } from "../../../users/providers/UserProviders";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routerModel";
import { useSnack } from "../../../providers/SnackbarProvider";

export default function CardActionBar({
  handleCardDelete,
  handleCardLike,
  cardId,
  userId,
  likes,
}) {
  const { user } = useUser();
  let loggedInUserId = 0;
  if (user) {
    loggedInUserId = user._id;
  }

  const navigate = useNavigate();
  const setSnack = useSnack();

  const [liked, setLiked] = useState(likes.includes(loggedInUserId));

  const toggleLike = () => {
    if (!user)
      return setSnack(
        "error",
        "Like available only for logged-in users! Please signin"
      );
    setLiked(!liked);
    const changeLikeStatus = handleCardLike(cardId);
    if (changeLikeStatus) {
      if (!liked) {
        return setSnack("info", "Added to favorites");
      } else {
        return setSnack("info", "Removed from favorites");
      }
    } else {
      setLiked(!liked);
    }
  };

  const handleCardEdit = (id) => {
    console.log("Navigate to edit page for card", id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>

            <IconButton onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={toggleLike}>
          {liked ? (
            <FavoriteIcon sx={{ color: "#e71e41a3" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>
    </CardActions>
  );
}
