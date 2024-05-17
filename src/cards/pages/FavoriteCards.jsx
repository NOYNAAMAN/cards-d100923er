import { useEffect } from "react";
import useCards from "../hooks/useCards";
import PageHader from "../../components/PageHader";
import CardsFeedback from "../components/CardsFeedback";
import AddNewCardButton from "../components/AddNewCardButton";

export default function FavoritCardsPage() {
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
        title="Favorit cards"
        subtitle="On this page you can find all bussines cards you liked"
      />
      <CardsFeedback
        cards={cards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      <AddNewCardButton />
    </div>
  );
}
