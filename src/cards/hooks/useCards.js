import { useCallback, useState } from "react";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getLocationCoordniate,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routerModel";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard";
import normalizeAddress from "../helpers/normalization/normalizeAddress";

export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [marker, setMarker] = useState({});
  const navigate = useNavigate();
  const setSnack = useSnack();

  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setIsLoading(false);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback(
    async (cardId) => {
      setIsLoading(true);

      try {
        const card = await deleteCard(cardId);
        setCard(card);
        setSnack("success", "The card has been successfully deleted");
        setTimeout(() => {
          getAllCards();
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, getAllCards]
  );

  const handleCardLike = useCallback(async (cardId) => {
    setError(null);
    try {
      await changeLikeStatus(cardId);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const addressForMap = useCallback(async (address) => {
    setIsLoading(true);
    setError(null);
    try {
      const marker = await getLocationCoordniate(normalizeAddress(address));
      setMarker(marker);
      return marker;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    marker,
    card,
    cards,
    isLoading,
    error,
    handleCardDelete,
    handleCardLike,
    getCardById,
    getAllCards,
    handleCreateCard,
    handleUpdateCard,
    addressForMap,
  };
}
