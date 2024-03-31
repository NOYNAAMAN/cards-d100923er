import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "axios";

import CardsFeedback from "../components/card/CardsFeedback";

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const getCardsData = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        const data = response.data;
        setCards(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getCardsData();
  }, []);

  const handleCardDelete = (id) => {
    console.log("you deleted card no" + id);
  };

  const handleCardLike = (id) => {
    console.log("you liked card no" + id);
  };
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
