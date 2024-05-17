import React from "react";
import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";
import ROUTES from "../../routes/routerModel";
import { Navigate } from "react-router-dom";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";

export default function AddCardPage() {
  const { user } = useUser();
  const { handleCreateCard } = useCards();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCardForm, cardSchema, handleCreateCard);

  if (user) data.user_id = user._id;
  else return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="add card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
}
