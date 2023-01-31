import { Modal, Box, Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type AddAnnotationModalProps = {
  open: boolean;
  handleClose: any;
  addAnnotation: (annotation: string) => any;
};

const AddAnnotationModal = ({
  handleClose,
  open,
  addAnnotation,
}: AddAnnotationModalProps) => {
  const [annotation, setAnnotation] = useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          What annotation would you like to add?
        </Typography>
        <TextField
          sx={{ marginTop: "1rem", textAlign: "right" }}
          fullWidth
          id="fullWidth"
          onChange={(e) => setAnnotation(e.target.value)}
        />

        <Box sx={{ marginTop: "1rem" }}>
          <Button variant="text" onClick={handleClose}>
            Close
          </Button>
          <Button
            sx={{ marginLeft: "1rem" }}
            onClick={() => {
              addAnnotation(annotation);
              handleClose();
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddAnnotationModal;
