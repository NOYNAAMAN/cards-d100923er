import { Button, Typography, Icon } from "@mui/material";
import React, { createContext, useState, useContext } from "react";

import WarningIcon from "@mui/icons-material/Warning";
import { popupStyles } from "../styling/popupStyles";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [popupContent, setPopupContent] = useState({
    title: "",
    content: "",
    onSave: null,
    onCancel: null,
  });

  const showPopup = (title, content, onSave, onCancel) => {
    setPopupContent({ title, content, onSave, onCancel });
  };

  const hidePopup = () => {
    setPopupContent({
      title: "",
      content: "",
      onSave: null,
      onCancel: null,
    });
  };

  const handleSave = () => {
    if (popupContent.onSave) {
      popupContent.onSave();
    }
    hidePopup();
  };

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popupContent.title && (
        <div style={popupStyles.popupContainer} className="popup">
          <div style={popupStyles.popupContent} className="popup-content">
            <Typography style={{ color: "white" }}>
              <Icon component={WarningIcon} style={popupStyles.warningIcon} />
              {popupContent.title}
            </Typography>
            <Typography style={{ color: "white" }}>
              {popupContent.content}
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                style={popupStyles.button}
                onClick={popupContent.onCancel || hidePopup}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                style={popupStyles.button}
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
