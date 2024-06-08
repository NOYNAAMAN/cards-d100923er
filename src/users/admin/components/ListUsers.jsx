import React, { useState, useEffect, useCallback } from "react";
import useUsers from "../../hooks/useUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Checkbox,
  IconButton,
  TablePagination,
  TextField,
} from "@mui/material";
import Spinner from "../../../components/Spiner";
import Delete from "@mui/icons-material/Delete";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import "../../../styling/css/style.css";

const ListUsers = () => {
  const { handleGetUsers, changeUserStatus, isLoading, handeleDeleteUser } =
    useUsers();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const users = await handleGetUsers();
      if (users) {
        setUsers(users);
      }
    }
    fetchUsers();
  }, [handleGetUsers]);

  const handleCheckboxChange = useCallback(
    async (userId, currentStatus) => {
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
    },
    [changeUserStatus]
  );

  const handleDeleteUser = useCallback(
    async (userId) => {
      try {
        await handeleDeleteUser(userId);
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    },
    [handeleDeleteUser]
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setPage(0);
  };

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.middle} ${user.name.last}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  if (isLoading) return <Spinner />;

  return (
    <div sx={{ padding: "10px" }}>
      <TextField
        label="Filter by Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={handleFilterChange}
      />
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <Table className="users-table">
          <TableHead className="table-cell">
            <TableRow sx={{ textAlign: "center" }}>
              <TableCell>Profile</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Is Business</TableCell>
              <TableCell align="left">Is Admin</TableCell>
              <TableCell align="left">Remove User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    <Avatar src={user.image.url} alt={user.image.alt} />
                  </TableCell>
                  <TableCell align="left">
                    {user.name.first}, {user.name.middle},{user.name.last}
                  </TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">
                    {user.address.state},{user.address.country},
                    {user.address.city},{user.address.street},
                    {user.address.houseNumber}
                    {user.address.zip}
                  </TableCell>
                  <TableCell align="left">
                    <Checkbox
                      checked={user.isBusiness}
                      color="primary"
                      onChange={() =>
                        handleCheckboxChange(user._id, user.isBusiness)
                      }
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Checkbox checked={user.isAdmin} color="primary" disabled />
                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() =>
                        !user.isAdmin && handleDeleteUser(user._id)
                      }
                      className={
                        user.isAdmin ? "delete-button-admin" : "delete-button"
                      }
                      disabled={user.isAdmin}
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
        <TablePagination
          rowsPerPageOptions={[25, 50, 100, 200]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default React.memo(ListUsers);
