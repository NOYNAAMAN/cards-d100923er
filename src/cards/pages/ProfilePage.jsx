import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";
import useUsers from "../../users/hooks/useUsers";
import { getUser } from "../../users/services/localStorageService";
import ROUTES from "../../routes/routerModel";
import Spinner from "../../components/Spiner";
import { updateUser } from "../../users/services/userApiService";
import mapToModelUser from "../../users/helpers/normalization/mapToModelUser";
import updateUserSchema from "../../users/models/updateUserSchema";

export default function ProfilePage() {
  const { handleGetUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const userId = getUser()?._id;

  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate(ROUTES.CARDS);
      return;
    }
    const fetchData = async () => {
      const data = await handleGetUser(user._id);
      setUserData(data);
    };
    fetchData();
  }, [handleGetUser, navigate]);

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditData({ ...mapToModelUser(userData) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, subField] = name.split(".");

    if (subField) {
      setEditData((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subField]: value,
        },
      }));
    } else {
      setEditData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = async () => {
    setIsEditing(false);
    const normalizedUser = mapToModelUser(editData);
    try {
      const data = await updateUser(userId, normalizedUser);
      setUserData((prevState) => ({ ...editData, email: prevState.email }));
      if (data) {
        console.log("success");
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (error) return <Error errorMessage={error} />;
  if (isLoading) return <Spinner />;
  if (userData) {
    const { image, name, email, phone, address } = userData;
    const fullName = `${name.first} ${name.middle} ${name.last}`;
    const fullAddress = `${address.street} ${address.houseNumber}, ${address.city}, ${address.country}`;

    return (
      <Box>
        <Avatar src={image.url} alt={image.alt} />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Profile Information</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  Full Name:{" "}
                  {isEditing ? (
                    <>
                      <TextField
                        name="name.first"
                        onChange={handleChange}
                        defaultValue={name.first}
                      ></TextField>
                      <TextField
                        name="name.middle"
                        onChange={handleChange}
                        defaultValue={name.middle}
                      ></TextField>
                      <TextField
                        name="name.last"
                        onChange={handleChange}
                        defaultValue={name.last}
                      ></TextField>
                    </>
                  ) : (
                    <Typography>{fullName}</Typography>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Email:{" "}
                  {isEditing ? (
                    <TextField name="email" disabled defaultValue={email} />
                  ) : (
                    <Typography>{email}</Typography>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Phone:{" "}
                  {isEditing ? (
                    <TextField
                      name="phone"
                      onChange={handleChange}
                      defaultValue={phone}
                    />
                  ) : (
                    <Typography>{phone}</Typography>
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Address:{" "}
                  {isEditing ? (
                    <>
                      <TextField
                        name="address.street"
                        onChange={handleChange}
                        defaultValue={address.street}
                      />
                      <TextField
                        defaultValue={address.houseNumber}
                        name="address.houseNumber"
                        onChange={handleChange}
                      />
                      <TextField
                        name="address.city"
                        onChange={handleChange}
                        defaultValue={address.city}
                      />
                      <TextField
                        name="address.country"
                        onChange={handleChange}
                        defaultValue={address.country}
                      />
                    </>
                  ) : (
                    <Typography>{fullAddress}</Typography>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {!isEditing ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditProfile}
            sx={{ mt: 2 }}
          >
            Edit Profile
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        )}
      </Box>
    );
  }

  return null;
}
