import { Button, Typography, Icon } from "@mui/material";
import React, { createContext, useState, useContext } from "react";
import WarningIcon from "@mui/icons-material/Warning"; // ניתן להחליף בכל אייקון אחר
import { getPopupStyles } from "../styling/js/popupStyles";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [popupContent, setPopupContent] = useState({
    title: "",
    content: "",
    onSave: null,
    onCancel: null,
    icon: WarningIcon, // ברירת מחדל לאייקון
    color: "white", // ברירת מחדל לצבע טקסט
    // backgroundColor: "#ffb100", // ברירת מחדל לצבע רקע
  });

  const showPopup = (
    title,
    content,
    onSave,
    onCancel,
    icon = WarningIcon,
    color = "white",
    backgroundColor = "#ffcc00"
  ) => {
    setPopupContent({
      title,
      content,
      onSave,
      onCancel,
      icon,
      color,
      backgroundColor,
    });
  };

  const hidePopup = () => {
    setPopupContent({
      title: "",
      content: "",
      onSave: null,
      onCancel: null,
      icon: WarningIcon, // ברירת מחדל לאייקון
      color: "white", // ברירת מחדל לצבע טקסט
      backgroundColor: "#ffcc00", // ברירת מחדל לצבע רקע
    });
  };

  const handleSave = () => {
    if (popupContent.onSave) {
      popupContent.onSave();
    }
    hidePopup();
  };

  const styles = getPopupStyles(
    popupContent.backgroundColor,
    popupContent.color
  );

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popupContent.title && (
        <div style={styles.popupContainer} className="popup">
          <div style={styles.popupContent} className="popup-content">
            <Typography style={{ color: popupContent.color }}>
              <Icon component={popupContent.icon} style={styles.warningIcon} />
              {popupContent.title}
            </Typography>
            <Typography style={{ color: popupContent.color }}>
              {popupContent.content}
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                style={styles.button}
                onClick={popupContent.onCancel || hidePopup}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                style={styles.button}
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
};
