import React from "react";
import CardComponent from "./card/CardComponent";
import { Box, Container, Typography } from "@mui/material";
import PageHader from "../../components/PageHader";
import { useLocation } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import useUsers from "../../users/hooks/useUsers";
import '../../styling/css/style.css'

export default function Cards({ cards, handleCardDelete, handleCardLike }) {
  const { user, limitedAccesLoginAlert } = useUsers();
  const location = useLocation();

  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (location.pathname === ROUTES.CARDS || location.pathname === ROUTES.ROOT) {
    return (
      <Box>
        <PageHader
          title="Cards"
          subtitle=" In this page you can see all the cards .."
        />
        <Container sx={{ display: "flex", flexWrap: "wrap" }} className="cards-container">
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
  }

  if (location.pathname === ROUTES.MY_CARDS) {
    if (!user) return limitedAccesLoginAlert();
    const filterdCards = cards.filter((card) => card.user_id === user._id);
    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }} className="cards-container">
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

  if (location.pathname === ROUTES.FAV_CARDS) {
    if (!user) return limitedAccesLoginAlert();
    const filterdCards = cards.filter((card) => card.likes.includes(user._id));

    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }} className="cards-container">
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
  return null;
}
