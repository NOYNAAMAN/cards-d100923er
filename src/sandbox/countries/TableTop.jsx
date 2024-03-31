import { Button, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function TableTop({ refreshFunc, countriesList }) {
  return (
    <div>
      {countriesList.length === 0 ? (
        <TableHead>
          <TableRow>
            <TableCell>Country Name :</TableCell>
            <TableCell>
              <Button variant="contained" disabled>
                Refresh
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      ) : (
        <TableHead>
          <TableRow>
            <TableCell>Country Name :</TableCell>
            <TableCell>
              <Button variant="contained" onClick={refreshFunc}>
                Refresh
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
      )}
    </div>
  );
}
