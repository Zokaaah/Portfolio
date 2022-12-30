import React from "react";

import styles from "./HomeStart.module.css";
import zokah from "../img/zokah.png";
import TabMenu from "./TabMenu";

import InfoIcon from "@mui/icons-material/Info";
import needweather from "../img/needweather.png";
import needprojects from "../img/needprojects.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import instagram from "../img/instagram.png";

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
          <div>
            <button className={styles.btnContato}>Contato</button>
            <button className={styles.btnCurriculo}>Curriculo</button>
          </div>
        </div>
        <img className={styles.StartImg} src={zokah} alt="" />
      </div>
      <div>
        <div className={styles.SobreContainer}>
          <h1>Sobre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <InfoIcon />
        </div>
      </div>

      <div className={styles.CompContainer}>
        <div className={styles.Comp1}>
          <h4>Front-end</h4>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>

        <div className={styles.Comp2}>
          <h4>Back-End</h4>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
      </div>

      <div className={styles.ExpContainer}>
        <h1 className={styles.titles}>Experiencia</h1>
        <div className="teste1"></div>

        <TabMenu className="ConteudoTab" />
        <div className="teste2"></div>
      </div>

      <div className={styles.ProjectContainer}>
        <h1 className={styles.titles}>Projetos</h1>
      </div>
      <div className={styles.projetos}>
        {/* projeto1 */}
        <div className={styles.projetoposicao1}>
          <img className={styles.img} src={needprojects} alt="" />
        </div>
        <div className={styles.projetoposicao2}>
          <p className={styles.txt}>
            O Need projects é uma plataforma de gerenciamento de projetos
            coolaborativos online
          </p>
          <button className={styles.btn1_projetos}>Ver projeto</button>
          <button className={styles.btn1_projetos}>GitHub</button>
        </div>

        {/* projeto2 */}
        <div className={styles.projetoposicao2}>
          <p className={styles.txt}>
            O Need Weather é uma plataforma que exibe a condição climatica atual
            da localidade digitada pelo usuario
          </p>
          <button className={styles.btn1_projetos}>Ver projeto</button>
          <button className={styles.btn1_projetos}>GitHub</button>
        </div>
        <div className={styles.projetoposicao1}>
          <img className={styles.img} src={needweather} alt="" />
        </div>
      </div>

      <div className={styles.titles}>
        <h1>Contatos</h1>
      </div>
      <div className={styles.Contatos}>
        <div className={styles.icons}>
          <img className={styles.icon_contatos} src={email} alt="" />
          <h4>Email</h4>
          <p className={styles.subContatos}>gabriel.oliveira@</p>
        </div>
        <div className={styles.icons}>
          <img className={styles.icon_contatos} src={linkedin} alt="" />
          <p>linkedin</p>
          <p className={styles.subContatos}>@GabrielOliveira</p>
        </div>
        <div className={styles.icons}>
          <img className={styles.icon_contatos} src={instagram} alt="" />
          <p>Instagram</p>
          <p className={styles.subContatos}>@gabriel_zokah</p>
        </div>
        <div className={styles.icons}>
          <img className={styles.icon_contatos} src={github} alt="" />
          <p>Github</p>
          <p className={styles.subContatos}>@Zokaah</p>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
