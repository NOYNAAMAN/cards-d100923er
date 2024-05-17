import { Paper, Table, TableContainer, Button, Box } from "@mui/material";
import React from "react";
import Error from "../../components/Error";
import TableTop from "./TableTop";
import TableContent from "./TableContent";

export default function CountriesTable({
  countriesList,
  refreshFunc,
  isLoading,
  error,
}) {
  return error ? (
    <Box>
      <Error errorMessage={error} />
      <Button variant="contained" onClick={refreshFunc}>
        Try again
      </Button>
    </Box>
  ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableTop
          countriesList={countriesList}
          refreshFunc={refreshFunc}
          isLoading={isLoading}
        />
        <TableContent countriesList={countriesList} isLoading={isLoading} />
      </Table>
    </TableContainer>
  );
}
