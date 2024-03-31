import {
  Avatar,
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function CardData({ cardData }) {
  return (
    <Box>
      <Avatar src={cardData.image.url} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Title:<Typography>{cardData.title}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Subtitle:<Typography>{cardData.subtitle}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Email:<Typography>{cardData.email}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Phone:<Typography>{cardData.phone}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Website:<Typography>{cardData.web}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
}
