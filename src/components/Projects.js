import React from "react";
import { Link } from "react-router-dom";

import img1 from "../img/needprice.png";
import img2 from "../img/needweather.png";
import img3 from "../img/needprojects.png";
import img4 from "../img/needpets.png";
import img5 from "../img/netflix.png";

import styles from "../components/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      image: img2,
      name: "Need Weather",
      link: "https://need-weather.vercel.app",
      desc: "Need Weather - Projeto desenvolvido com react JS que exibe dados climáticos da cidade digitada pelo usuario",
      git: "https://github.com/Zokaaah/Need-Weather",
    },
    {
      image: img1,
      name: "Need Price",
      link: "https://need-price.vercel.app",
      desc: "Need Price - Pequeno projeto desenvolvido em React JS, com intuito de consumir e exibir dados de uma API de cotação de moedas",
      git: "https://github.com/Zokaaah/Need-Price",

    },
    {
      image: img3,
      name: "Need Projects",
      link: "https://need-projects.vercel.app",
      desc: "Gerenciador de projetos coletivos,projeto ainda está em processo de desenvolvimento",
      git: "https://need-projects.vercel.app/",

    },

    {
      image: img4,
      name: "Need Pets",
      link: "https://need-pets.vercel.app",
      desc: "Landing Page De petshop desenvolvido com React JS",
    },

    {
      image: img5,
      name: "Clone Netflix",
      link: "https://clone-netflix-pink.vercel.app/",
      desc: "Projeto academico desenvolvido com intuito de desenvolver um site com layout similar ao Netflix ",
      git: "https://github.com/Zokaaah/Clone-Netflix"

    },

    
  ];

  return (
    <div className={styles.projects}>
      <br />
      <br />

      <h1 className={styles.projectsTitle}>Projetos</h1>
      <Link className={styles.projectsSubTitle} to={"/"}> {"< "}Voltar
            </Link>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div className={styles.projectcard}>
            <img className={styles.image} src={project.image} alt="" />
            <p>{project.desc}</p>
            <a className={styles.btnProjeto} href={project.git}>
              GitHub
            </a>
            <a className={styles.btnProjeto} href={project.link}>
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
