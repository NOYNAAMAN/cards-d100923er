import React from "react";
import { Card, CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routerModel";
import { fixIsraelPhoneNumber } from "../../utils/cardsUtils";

export default function CardComponent({
  card,
  handleCardDelete,
  handleCardLike,
}) {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        cardId={card._id}
        userId={card.user_id}
        likes={card.likes}
        phone={fixIsraelPhoneNumber(card.phone)}
      />
    </Card>
  );
}
