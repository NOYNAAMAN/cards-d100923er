import { useEffect } from "react";
import useCards from "../hooks/useCards";
import PageHader from "../../components/PageHader";
import CardsFeedback from "../components/CardsFeedback";
import ButtonActionComponent from "../components/ButtonActionComponent";
import { useUser } from "../../users/providers/UserProviders";

export default function FavoriteCardsPage() {
  const {
    isLoading,
    error,
    cards,

    handleCardDelete,
    handleCardLike,
    getAllCards,
  } = useCards();

  const { user } = useUser();

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
      {user && (user.isAdmin || user.isBusiness) ? (
        <ButtonActionComponent icon={"Add"} />
      ) : null}
    </div>
  );
}
