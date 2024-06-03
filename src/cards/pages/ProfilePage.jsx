import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Error from "../../components/Error";
import { useNavigate } from "react-router-dom";
import useUsers from "../../users/hooks/useUsers";
import { getUser } from "../../users/services/localStorageService";
import ROUTES from "../../routes/routerModel";
import Spinner from "../../components/Spiner";

import ButtonActionComponent from "../components/ButtonActionComponent";

export default function ProfilePage() {
  const { handleGetUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

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
                  Full Name: <Typography>{fullName}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Email: <Typography>{email}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Phone: <Typography>{phone}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Address: <Typography>{fullAddress}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <ButtonActionComponent icon={"Edit"} />
      </Box>
    );
  }

  return null;
}
