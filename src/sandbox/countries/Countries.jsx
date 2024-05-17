import React from "react";
import useCountries from "../hooks/useCountries";
import CountriesTable from "./CountriesTable";

export default function Countries() {
  const { countriesList, refreshFunc, isLoading, error } = useCountries();
  return (
    <CountriesTable
      countriesList={countriesList}
      refreshFunc={refreshFunc}
      isLoading={isLoading}
      error={error}
    />
  );
}
