import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";



import reacticon from "../img/reacticon.png";
import bootstrap from "../img/bootstrap.png";
import figma from "../img/figma.png";
import mui from "../img/mui.png";
import node from "../img/node.png";
import php from "../img/php.png";
import sql from "../img/sql.png";
// import python from "../img/python.png";

import xd from "../img/xd.png";
import laravel from "../img/laravel.png";
import js from "../img/js.png";
import html5 from "../img/html5.png";
import css from "../img/css.png";

import styles from "../components/modal.module.css";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "#292a2c",
  color: "#fff",
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
          bgcolor: "rgb(39, 50, 56)",
          color: "#fff",
          width: 200,
          borderRadius: 1.5,
          border:'none',
          fontWeight: "bold",
          "&:hover": {
            color: '#4bbd5c',
            border:'solid 1px #4bbd5c',

            backgroundColor: 'rgb(39, 50, 56)"'
          },
        }}
        onClick={handleOpen}
      >
        Legenda
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.modalInfo}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
              ></Typography>

              <div className={styles.Legenda1}>
                <div className={styles.content}>
                  <img className={styles.icons} src={reacticon} alt="" />
                  <p>React JS</p>
                </div>
                <div className={styles.content}>
                  <img className={styles.icons} src={figma} alt="" />
                  <p>Figma</p>
                </div>
                <div className={styles.content}>
                  <img className={styles.icons} src={xd} alt="" />
                  <p>Adobe Xd</p>
                </div>
                <div className={styles.content}>
                  <img className={styles.icons} src={mui} alt="" />
                  <p>Material UI</p>
                </div>
                <div className={styles.content}>
                  <img className={styles.icons} src={js} alt="" />
                  <p>JavaScript</p>
                </div>
                <div className={styles.content}>
                  <img className={styles.icons} src={html5} alt="" />
                  <p>HTML5</p>
                </div>
              </div>

              <div className={styles.Legenda2}>
              <div className={styles.content}>
                <img className={styles.icons} src={node} alt="" />
                <p>Node JS</p>
                </div>
                <div className={styles.content}>
                <img className={styles.icons} src={php} alt="" />
                <p>PHP</p>
                </div>
                <div className={styles.content}>
                <img className={styles.icons} src={sql} alt="" />
                <p>MySql</p>
                </div>
                <div className={styles.content}>
                <img className={styles.icons} src={laravel} alt="" />
                <p>Laravel</p>
                </div>
                <div className={styles.content}>
                <img className={styles.icons} src={css} alt="" />
                <p>CSS3</p>
                </div>
                <div className={styles.content}>
                <img className={styles.icons} src={bootstrap} alt="" />
                <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
