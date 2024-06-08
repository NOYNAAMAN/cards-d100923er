export const getPopupStyles = (
  backgroundColor = "##ffcc00",
  textColor = "white"
) => ({
  popupContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: backgroundColor,
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
    border: `2px solid ${textColor}`,
    color: textColor,
    zIndex: 10000,
    marginLeft: "10px",
  },
});
