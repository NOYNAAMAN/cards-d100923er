import React from "react";
import { Typography } from "@mui/material";
import Spinner from "../../components/Spiner";
import Cards from "./Cards";
import Error from "../../components/Error";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleCardLike,
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
        handleCardLike={handleCardLike}
      />
    );
  }

  return null;
}
