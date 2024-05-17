import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useCards from "../hooks/useCards";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Map = ({ card }) => {
  const { addressForMap, marker } = useCards();

  useEffect(() => {
    addressForMap(card.address);
  }, [addressForMap, card]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCnivG9jiYuxJxHMUPLOIm7EAVLNSv69ns">
      <GoogleMap mapContainerStyle={containerStyle} center={marker} zoom={10}>
        <Marker position={marker} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
