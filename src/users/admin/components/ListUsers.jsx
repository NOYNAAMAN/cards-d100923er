import React, { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Checkbox, IconButton } from "@mui/material";
import Spinner from "../../../components/Spiner";
import Delete from "@mui/icons-material/Delete";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import "../../../styling/css/style.css";

export default function ListUsers() {
  const { handleGetUsers, changeUserStatus, isLoading, handeleDeleteUser } =
    useUsers();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const users = await handleGetUsers();
      if (users) {
        setUsers(users);
      }
    }
    fetchUsers();
  }, [handleGetUsers]);

  const handleCheckboxChange = async (userId, currentStatus) => {
    try {
      await changeUserStatus(userId);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, isBusiness: !currentStatus } : user
        )
      );
    } catch (error) {
      console.error("Failed to update user status:", error);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <TableContainer component={Paper} className="users-table">
      <Table sx={{ minWidth: 300 }}>
        <TableHead className="table-cell">
          <TableRow sx={{ textAlign: "center" }}>
            <TableCell>Profile</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Is Business</TableCell>
            <TableCell align="right">Is Admin</TableCell>
            <TableCell align="right">Remove User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <Avatar src={user.image.url} alt={user.image.alt} />
              </TableCell>
              <TableCell align="right">
                {user.name.first}, {user.name.middle},{user.name.last}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">
                {user.address.state},{user.address.country},{user.address.city},
                {user.address.streer},{user.address.houseNumber}
                {user.address.zip}
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={user.isBusiness}
                  color="primary"
                  onChange={() =>
                    handleCheckboxChange(user._id, user.isBusiness)
                  }
                />
              </TableCell>
              <TableCell align="right">
                {" "}
                <Checkbox checked={user.isAdmin} color="primary" disabled />
              </TableCell>

              <TableCell align="right">
                <IconButton
                  onClick={() => handeleDeleteUser(user._id)}
                  className={
                    user.isAdmin ? "delete-button-admin" : "delete-button"
                  }
                >
                  {user.isAdmin ? (
                    <DeleteForeverSharpIcon />
                  ) : (
                    <Delete color="primary" />
                  )}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
