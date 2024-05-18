import React, { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
  const [snackQueue, setSnackQueue] = useState([]);

  const setSnack = useCallback((color, message, variant = "filled") => {
    const key = new Date().getTime();
    setSnackQueue((prevQueue) => [
      ...prevQueue,
      { key, color, message, variant },
    ]);
  }, []);

  const handleClose = (key) => {
    setSnackQueue((prevQueue) =>
      prevQueue.filter((snack) => snack.key !== key)
    );
  };

  return (
    <>
      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>

      {snackQueue.map((snack) => (
        <Snackbar
          key={snack.key}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={true}
          onClose={() => handleClose(snack.key)}
          autoHideDuration={5000}
        >
          <Alert
            onClose={() => handleClose(snack.key)}
            severity={snack.color}
            variant={snack.variant}
          >
            {snack.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

export const useSnack = () => {
  const context = useContext(SnackbarContext);
  if (!context)
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  return context;
};
