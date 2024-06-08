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
  const { id } = useParams();
  const { handleUpdateCard, getCardById, card } = useCards();
  const { user } = useUser();
  const { showPopup } = usePopup();

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

  useEffect(() => {
    getCardById(id).then((data) => {
      const modelCard = mapCardToModel(data);
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
