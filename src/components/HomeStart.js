import React from "react";

import styles from "./HomeStart.module.css";
import zokah from "../img/zokah.png";
import TabMenu from "./TabMenu";

import InfoIcon from "@mui/icons-material/Info";

//IMAGES
import needweather from "../img/needweather.png";
import needprojects from "../img/needprojects.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import instagram from "../img/instagram.png";
import reacticon from "../img/reacticon.png";
import bootstrap from "../img/bootstrap.png";
import figma from "../img/figma.png";
import mui from "../img/mui.png";
import node from "../img/node.png";
import php from "../img/php.png";
import sql from "../img/sql.png";
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
            Olá, sou Gabriel de Oliveira (ou zokah), sou desenvolvedor web Junior, portifólio desenvolvido com o intuito de divulgar meus projetos pessoais e academicos.
            possuo experiencia nas linguagens React js, 
          </p>
          <InfoIcon />
        </div>
      </div>
      <h1 className={styles.titles}>Tecnologias e Linguagens</h1>

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
        </div>
      </div>

      <div className={styles.ExpContainer}>
        <h1 className={styles.titles}>Experiência</h1>
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
          <div className={styles.container_btn}>
            <button className={styles.btn1_projetos}>Ver projeto</button>
            <button className={styles.btn1_projetos}>GitHub</button>
          </div>
        </div>

        {/* projeto2 */}
        <div className={styles.projetoposicao2}>
          <p className={styles.txt}>
            O Need Weather é uma plataforma que exibe a condição climatica atual
            da localidade digitada pelo usuario
          </p>
          <div className={styles.container_btn}>
            <button className={styles.btn1_projetos}>Ver projeto</button>
            <button className={styles.btn1_projetos}>GitHub</button>
          </div>
        </div>
        <div className={styles.projetoposicao1}>
          <img className={styles.img} src={needweather} alt="" />
        </div>

        <h4 className={styles.titles}> Ver todos os projetos</h4>
      </div>

      <div className={styles.titles}>
        <h1>Contatos</h1>
      </div>
      <div className={styles.Contatos}>
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
        <div className={styles.icons}>
          <img className={styles.icon_contatos} src={email} alt="" />
          <p>E-mail</p>
          <p className={styles.subContatos}>gabriel.oliveira@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
