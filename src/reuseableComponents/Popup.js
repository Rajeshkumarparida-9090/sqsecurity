import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const PopUp = ({ open, description, title, handleClose, handleDone }) => {
  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:"#fff", background:"#ff1313"}}>No</Button>
          <Button onClick={handleDone} style={{color:"#fff", background:"#008000"}}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default PopUp;
