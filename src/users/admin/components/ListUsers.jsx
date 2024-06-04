import React, { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

export default function ListUsers() {
  const { handleGetUsers } = useUsers();

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
            <TableRow
              key={user._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name.first}
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
                {" "}
                <Checkbox value={user.isBusiness.toString()} color="primary" />
              </TableCell>
              <TableCell align="right"> {user.isAdmin.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
