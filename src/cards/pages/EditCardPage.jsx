import { Navigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProviders";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import { useEffect } from "react";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import ROUTES from "../../routes/routerModel";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import cardSchema from "../models/cardSchema";
import { usePopup } from "../../providers/PopupProvider";

export default function EditCardPage() {
  //what do we need in this page
  //id of the card - useParams
  const { id } = useParams();
  //handleUpdateCard & handleGetCard & card - useCards
  const { handleUpdateCard, getCardById, card } = useCards();

  //user - useUser (provider)
  const { user } = useUser();
  const { showPopup } = usePopup();
  //useForm (initialForm,schema,onSubmit)
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (newCard) =>
    showPopup(
      "Confirm Save",
      "Are you sure you want to save the changes?",
      () => {
        handleUpdateCard(card._id, newCard);
      }
    )
  );
  //useEffect - update the form data to this card data
  useEffect(() => {
    getCardById(id).then((data) => {
      console.log("data -> ", data);
      const modelCard = mapCardToModel(data);
      console.log("modelCard -> ", modelCard);
      console.log(data);
      setData(modelCard);
    });
  }, [getCardById, setData, id]);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data && (
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      )}
    </Container>
  );
}
