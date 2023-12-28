import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css"

const CreateAssessment = ({ open, handleClose, handleOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modalParent">
        <div className="modalHeader flex-aicjcsb">
          <h2 className="modalHeaderHeading">Create new assessment</h2>
          <span className="closeModal" onClick={handleClose}>
            <CloseIcon />
          </span>
        </div>
        <div className="ModalFields">
          <div className="inputFields">
            <h3 className="inputFieldsHeading">Name of assessment</h3>
          </div>
          
        </div>
      </Box>
    </Modal>
  );
};

export default CreateAssessment;
