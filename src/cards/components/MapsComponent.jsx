import React, { useEffect, useState, useCallback, useRef } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import useCards from "../hooks/useCards";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Map = ({ card }) => {
  const { addressForMap, marker } = useCards();
  const [locationExist, setLocationExist] = useState(false);
  const [loading, setLoading] = useState(true);
  const hasFetchedAddress = useRef(false);

  const fetchAddress = useCallback(async () => {
    try {
      setLoading(true);
      const newMarker = await addressForMap(card.address);
      setLocationExist(!!newMarker.lat);
    } catch (error) {
      console.error("Error fetching address:", error);
      setLocationExist(false);
    } finally {
      setLoading(false);
    }
  }, [addressForMap, card.address]);

  useEffect(() => {
    if (!hasFetchedAddress.current) {
      fetchAddress();
      hasFetchedAddress.current = true;
    }
  }, [fetchAddress]);

  return (
    <>
      {loading ? (
        <div>Loading map...</div>
      ) : locationExist && process.env.IS_PRODUCTION ? (
        <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&loading=async`}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={marker}
            zoom={10}
          >
            <Marker position={marker} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "500px",
          }}
        >
          <img
            src="/assets/imgs/error-location.png"
            alt="Location not found"
            style={{
              height: "600px",
              width: "600px",
              objectFit: "contain",
              margin: 0,
              padding: 0,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Map;
