import React from "react";

import styles from "./HomeStart.module.css";
import zokah from "../img/zokah.png";
import Slider from "./Slider";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "./Modal";
import ModalLegenda from "./ModalLegenda";
import Exp from "./Exp";

//IMAGES

import reacticon from "../img/reacticon.png";
import bootstrap from "../img/bootstrap.png";
import figma from "../img/figma.png";
import mui from "../img/mui.png";
import node from "../img/node.png";
import php from "../img/php.png";
import sql from "../img/sql.png";
import python from "../img/python.png";

import xd from "../img/xd.png";
import laravel from "../img/laravel.png";
import js from "../img/js.png";
import html5 from "../img/html5.png";
import css from "../img/css.png";

const HomeStart = () => {
  return (
    <div>
      <div className={styles.StartContainer}>
        <div className={styles.start1}>
          <h3 className={styles.text1}>
            <span>Olá, eu sou</span>
          </h3>
          <h1>
            <span className={styles.ColorText}>Gabriel Oliveira</span>
          </h1>
          <h2>Desenvolvedor Web</h2>

          <p>Desenvolvimento Web - Landing Pages, E-Commerce, WireFrames</p>
          <div className={styles.btnContainer}>
            <Modal />

            <button className={styles.btnCurriculo}><a href="https://github.com/zokaaah">GitHub</a></button>
          </div>
        </div>
        <img className={styles.StartImg} src={zokah} alt="" />
      </div>
      <div>
        <div className={styles.SobreContainer}>
          <h1>Sobre</h1>
          <p>
            Meu nome é Gabriel de Oliveira (ou Zokah), nascido em Lorena-Sp,
            formado em Análises e Desenvolvimento de Sistemas na Fatec
            Guaratinguetá, sou desenvolvedor Web junior, com conhecimentos em Java Script, React JS, PHP, Node Js, SQL, versionamento de codigo, consumo de Api's, etc.. este é
            meu portifólio, onde mostro um pouco de meu trabalho e expêriencias.
          </p>
          <InfoIcon />
        </div>
      </div>
      <h1 className={styles.titles}>Tecnologias e Linguagens</h1>
      <p className={styles.subtitles}>
        {" "}
        <ModalLegenda />
      </p>

      <div className={styles.CompContainer}>
        <div className={styles.Comp1}>
          <h4>Front-end</h4>
          <img className={styles.icon_comp} src={reacticon} alt="React JS" />
          <img className={styles.icon_comp} src={figma} alt="Figma" />
          <img className={styles.icon_comp} src={xd} alt="Adobe XD" />
          <img className={styles.icon_comp} src={mui} alt="Material UI" />
          <img className={styles.icon_comp} src={js} alt="JavaScript" />
          <img className={styles.icon_comp} src={html5} alt="HTML5" />
          <img className={styles.icon_comp} src={css} alt="CSS3" />
          <img className={styles.icon_comp} src={bootstrap} alt="Bootstrap" />
        </div>

        <div className={styles.Comp2}>
          <h4>Back-End</h4>
          <img className={styles.icon_comp} src={node} alt="Node JS" />
          <img className={styles.icon_comp} src={php} alt="PHP" />
          <img className={styles.icon_comp} src={sql} alt="MYSQL" />
          <img className={styles.icon_comp} src={laravel} alt="Laravel" />{" "}
          <img className={styles.icon_comp} src={python} alt="Pyton" />{" "}
        </div>
      </div>

      <h1 className={styles.titles}>Experiência</h1>

      <div className={styles.ExpContainer}>
        <Exp className="ConteudoTab" />
      </div>

      <div className={styles.ProjectContainer}>
        <h1 className={styles.titles}>Projetos</h1>
        <p className={styles.subtitles}>Arraste para o lado {">"} </p>
      </div>
      <Slider />
    </div>
  );
};

export default HomeStart;
