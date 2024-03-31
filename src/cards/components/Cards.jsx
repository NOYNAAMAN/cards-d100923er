import React from "react";
import CardComponent2 from "./card/CardComponent2";
import { Box, Container } from "@mui/material";
import PageHader from "../../components/PageHader";

export default function Cards({ cards }) {
  const handleCardDelete = (id) => {
    console.log("you deleted this card number : " + id);
  };
  const handleCardlike = (id) => {
    console.log("you liked this card number : " + id);
  };
  return (
    <Box>
      <PageHader
        titel="Cards"
        subtitle=" In this page you can see all the cards .."
      />
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <CardComponent2
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardlike={handleCardlike}
          />
        ))}
      </Container>
    </Box>
  );
}
