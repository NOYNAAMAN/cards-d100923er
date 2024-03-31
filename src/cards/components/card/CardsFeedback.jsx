import React from "react";

import { Typography } from "@mui/material";

import Spinner from "../../../components/Spiner";
import Error from "../../../components/Error";
import Cards from "../Cards";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLike,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) {
    return (
      <Cards
        cards={cards}
        handleCardDelete={handleDelete}
        handleCardLike={handleLike}
      />
    );
  }

  return null;
}
