import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import useUsers from "../hooks/useUsers";
import editSchema from "../models/editSchema";
import EditForm from "../components/EditForm";
import initialEditForm from "../helpers/initialForms/initialEditForm";
import userToModel from "../helpers/initialForms/userToModel";

import ROUTES from "../../routes/routerModel";
import { Navigate } from "react-router-dom";
import { usePopup } from "../../providers/PopupProvider";
import { getUser } from "../services/userService";

export default function UpdateUserPage() {
  const { handleUpdateUser, handleGetUser } = useUsers();
  const { showPopup } = usePopup();

  const user = getUser();
  if (!user) <Navigate replace to={ROUTES.ROOT} />;
  const {
    data,
    setData,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialEditForm, editSchema, (updatedUser) => {
    showPopup(
      "Confirm Save",
      "Are you sure you want to save the changes?",
      () => {
        handleUpdateUser(user._id, updatedUser);
      }
    );
  });

  useEffect(() => {
    handleGetUser(user._id).then((data) => {
      const modelUser = userToModel(data);
      setData(modelUser);
    });
  }, [handleGetUser, setData, user._id]);

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EditForm
        onReset={handleReset}
        validateForm={validateForm}
        title={"Edit Account"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        onSubmit={onSubmit}
      />
    </Container>
  );
}
