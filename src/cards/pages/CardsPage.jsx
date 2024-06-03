import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProviders";
import ButtonActionComponent from "../components/ButtonActionComponent";

export default function CardsPage() {
  const {
    cards,
    isLoading,
    error,
    handleCardDelete,
    handleCardLike,
    getAllCards,
  } = useCards();

  const [filteredCards, setFilteredCards] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    const filtered = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [cards, searchQuery]);

  const { user } = useUser();

  return (
    <Box>
      <CardsFeedback
        cards={filteredCards}
        handleDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      {user && (user.isAdmin || user.isBusiness) ? (
        <ButtonActionComponent icon={"Add"} />
      ) : null}
    </Box>
  );
}
