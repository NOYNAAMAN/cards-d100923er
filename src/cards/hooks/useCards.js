import axios from "axios";
import { useCallback, useState } from "react";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, serCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getAllCard = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      const data = response.data;
      serCards(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + id
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);
  const handleCardDelete = (id) => {
    console.log("you deleted card no" + id);
  };

  const handleCardLike = (id) => {
    console.log("you liked card no" + id);
  };

  return {
    card,
    cards,
    isLoading,
    error,
    handleCardDelete,
    handleCardLike,
    getCardById,
    getAllCard,
  };
}
