// popupStyles.js
export const popupStyles = {
  popupContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1976d2",
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  popupContent: {
    textAlign: "center",
    marginBottom: "10px",
  },
  warningIcon: {
    marginRight: "5px",
  },
  button: {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    zIndex: 10000,
    marginLeft: "10px",
  },
};
