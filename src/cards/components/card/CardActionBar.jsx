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
  const loggedInUserId = user._id;

  const navigate = useNavigate();
  const setSnack = useSnack();

  const [liked, setLiked] = useState(likes.includes(loggedInUserId));

  const omriHasNothingToDo = false;
  const omriNeedToCome = () => {
    console.log("I'm coming!");
  };
  const omriWillNotCome = () => {
    console.log("Sorry, I can't come! :(");
  };
  const omriIsComeToMe = () => {
    if (omriHasNothingToDo) {
      omriNeedToCome();
    } else {
      omriWillNotCome();
    }
  };

  omriIsComeToMe();

  const toggleLike = () => {
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
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </CardActions>
  );
}
