import { Container } from "@mui/material";

import PageHader from "../../components/PageHader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "../../components/Spiner";
import Error from "../../components/Error";
import CardData from "../components/card/CardData";
import useCards from "../hooks/useCards";

export default function CardDetailsPage() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (card) {
    return (
      <Container>
        <PageHader
          title="Card Details"
          subtitle="Here you can find all the details about specific card"
        />

        <CardData cardData={card} />
      </Container>
    );
  }
}
