import { Container } from "@mui/material";

import PageHader from "../../components/PageHader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spiner";
import Error from "../../components/Error";
import CardData from "../components/card/CardData";

export default function CardDetailsPage() {
  const { id } = useParams();
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const getCardDeatails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
        );
        const data = response.data;
        setCardData(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
      setIsLoading(false);
    };
    getCardDeatails();
  }, [id]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cardData) {
    return (
      <Container>
        <PageHader
          title="Card Details"
          subtitle="Here you can find all the details about specific card"
        />

        <CardData cardData={cardData} />
      </Container>
    );
  }
}
