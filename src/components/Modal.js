import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//images
import instagramIcon from "../img/instagram.png";
import whatsapp from "../img/whatsapp.png";
import linkedin from "../img/linkedin.png";

import styles from "../components/modal.module.css";
import { width } from "@mui/system";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 330,
  bgcolor: "#292a2c",
  color: "#fff",
  border: "none",
  //   borderradius:'17px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          bgcolor: "#4bbd5c",
          color: "#fff",
          width: 200,
          borderRadius: 1.5,
          fontWeight: "bold",
        }}
        onClick={handleOpen}
      >
        CONTATO
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.ContatoInfo}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Contatos
          </Typography>
              <div className={styles.ContatoContainer}>
                <img className={styles.icons} src={whatsapp} alt="" />
                <p>(12)997068967</p>
              </div>

              <div className={styles.ContatoContainer}>
                <img className={styles.icons} src={instagramIcon} alt="" />
                <p>@gabriel_zokah</p>
              </div>

              <div className={styles.ContatoContainer}>
                <img className={styles.icons} src={linkedin} alt="" />
                <p>Gabriel Oliveira</p>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
