import React, { useEffect } from "react";

import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import PageHader from "../../components/PageHader";
import ButtonActionComponent from "../components/ButtonActionComponent";

export default function MyCards() {
  const {
    isLoading,
    error,
    cards,
    handleCardDelete,
    handleCardLike,
    getAllCards,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  return (
    <div>
      <PageHader
        title="My cards"
        subtitle="On this page you can find all the bussines cards you create"
      />
      <CardsFeedback
        cards={cards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      <ButtonActionComponent icon={"Add"} />
    </div>
  );
}
