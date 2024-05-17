import React from "react";
import CardComponent from "./card/CardComponent";
import { Box, Container, Typography } from "@mui/material";
import PageHader from "../../components/PageHader";
import { useUser } from "../../users/providers/UserProviders";
import { useLocation } from "react-router-dom";

export default function Cards({ cards, handleCardDelete, handleCardLike }) {
  const { user } = useUser();
  const location = useLocation();

  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (location.pathname === "/cards")
    return (
      <Box>
        <PageHader
          titel="Cards"
          subtitle=" In this page you can see all the cards .."
        />
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
          {cards.map((card) => (
            <CardComponent
              key={card._id}
              card={card}
              handleCardDelete={handleCardDelete}
              handleCardLike={handleCardLike}
            />
          ))}
        </Container>
      </Box>
    );

  if (location.pathname === "/my-cards") {
    const filterdCards = cards.filter((card) => card.user_id === user._id);
    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {filterdCards.map((card) => (
          <CardComponent
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        ))}
      </Container>
    );
  }

  if (location.pathname === "/fav-cards") {
    const filterdCards = cards.filter((card) => card.likes.includes(user._id));

    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {filterdCards.map((card) => (
          <CardComponent
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />
        ))}
      </Container>
    );
  }
}
