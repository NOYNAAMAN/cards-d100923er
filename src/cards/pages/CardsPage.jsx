import { Box } from "@mui/material";
import React, { useEffect } from "react";

import CardsFeedback from "../components/card/CardsFeedback";
import useCards from "../hooks/useCards";

export default function CardsPage() {
  const {
    cards,
    isLoading,
    error,

    handleCardDelete,
    handleCardLike,
    getAllCard,
  } = useCards();
  useEffect(() => {
    getAllCard();
  }, [getAllCard]);

  return (
    <Box>
      <CardsFeedback
        cards={cards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
    </Box>
  );
}
