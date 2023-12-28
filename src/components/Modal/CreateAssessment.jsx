import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { itSkills } from "../../Skills";

const CreateAssessment = ({ open, handleClose, handleOpen }) => {
  const [testFor, setTestFor] = useState(10);
  const [descriptionType, setDescriptionType] = useState(10);

  const handleChange = (event) => {
    setTestFor(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setDescriptionType(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    borderRadius: "0.5rem",
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
          <form onSubmit={onSubmit}>
            <div className="inputFields">
              <h3 className="inputFieldsHeading">Name of assessment</h3>
              <TextField
                style={{ width: "100%", marginTop: ".62rem" }}
                variant="outlined"
                placeholder="Type Here"
              />
            </div>

            <div className="inputFields">
              <h3 className="inputFieldsHeading">Purpose of the test is</h3>
              <FormControl fullWidth>
                <Select
                  value={testFor}
                  onChange={handleChange}
                  defaultValue={"standard"}
                  style={{ width: "100%", marginTop: ".62rem" }}
                >
                  <MenuItem value={10}>Job</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Random</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="inputFields">
              <h3 className="inputFieldsHeading">Description</h3>
              <FormControl fullWidth>
                <Select
                  value={descriptionType}
                  onChange={handleChangeDesc}
                  defaultValue={"standard"}
                  style={{ width: "100%", marginTop: ".62rem" }}
                >
                  <MenuItem value={10}>Select</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="inputFields">
              <h3 className="inputFieldsHeading">Skills</h3>
              <Stack spacing={3}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={itSkills}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      style={{ width: "100%", marginTop: ".62rem" }}
                      {...params}
                      variant="outlined"
                      placeholder="Type here"
                    />
                  )}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        label={option.title}
                        style={{ color: "#1C4980", backgroundColor: "#DDEDFF" }}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                />
              </Stack>
            </div>

            <div className="inputFields">
              <h3 className="inputFieldsHeading">Duration of assessment</h3>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "MobileTimePicker",
                    "MobileTimePicker",
                    "MobileTimePicker",
                  ]}
                >
                  <DemoItem>
                    <TimePicker views={["hours", "minutes", "seconds"]} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <button type="submit" className="formSubmitbtn">
              Save
            </button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateAssessment;
