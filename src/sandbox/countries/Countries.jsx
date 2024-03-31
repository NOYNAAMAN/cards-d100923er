import React, { useEffect, useState } from "react";
import axios from "axios";

import CountriesTable from "./CountriesTable";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);
  const [effectTriger, setEffectTriger] = useState(true);
  const refreshFunc = () => {
    setCountriesList([]);
    setEffectTriger((prev) => !prev);
  };

  useEffect(() => {
    const getAllcountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setCountriesList(data);
      } catch (error) {
        console.log("error ", error);
      }
    };
    getAllcountries();
  }, [effectTriger]);
  return (
    <CountriesTable countriesList={countriesList} refreshFunc={refreshFunc} />
  );
}
