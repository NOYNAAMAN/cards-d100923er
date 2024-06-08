import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useLocation } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";
import ROUTES from "../../../../routes/routerModel";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const location = useLocation();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      const searchPath = `${ROUTES.CARDS}?search=${debouncedSearchQuery}`;
      if (location.pathname + location.search !== searchPath) {
        window.location.replace(searchPath);
      }
    }
  }, [debouncedSearchQuery, location.pathname, location.search]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearchChange}
      />
    </Search>
  );
}
