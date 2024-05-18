import { Box } from "@mui/material";
import React, { useEffect } from "react";

import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProviders";

export default function CardsPage() {
  const {
    cards,
    isLoading,
    error,

    handleCardDelete,
    handleCardLike,
    getAllCards,
  } = useCards();
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  const { user } = useUser();

  return (
    <Box>
      <CardsFeedback
        cards={cards}
        handleDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      {user && (user.isAdmin || user.isBusiness) ? <AddNewCardButton /> : null}
    </Box>
  );
}
