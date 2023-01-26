import React from "react";

import img1 from "../img/needprice.png";
import img2 from "../img/needweather.png";
import img3 from "../img/needprojects.png";
import img4 from "../img/fateclub.jpg";

import styles from "../components/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      image: img2,
      name: "Need Weather",
      link: "https://need-weather.vercel.app",
      desc: "Need Weather - Projeto desenvolvido com react JS que exibe dados climáticos da cidade digitada pelo usuario",
    },
    {
      image: img1,
      name: "Need Price",
      link: "https://need-price.vercel.app",
      desc: "Need Price - Pequeno projeto desenvolvido em React JS, com intuito de consumir e exibir dados de uma API de cotação de moedas",
    },
    {
      image: img3,
      name: "Need Projects",
      link: "https://need-projects.vercel.app",
      desc: "Gerenciador de projetos coletivos,projeto ainda está em processo de desenvolvimento",
    },
    {
      image: img4,
      name: "Fateclub",
      link: "https://need-weather.vercel.app",
      desc: "Projeto academico desenvolvido com intuito de ser uma rede social interna dentro da instituição Fatec Guaratinguetá",
    },
    {
      image: img4,
      name: "Fateclub",
      link: "https://need-weather.vercel.app",
      desc: "Projeto academico desenvolvido com intuito de ser uma rede social interna dentro da instituição Fatec Guaratinguetá",
    },
    {
      image: img2,
      name: "Fateclub",
      link: "https://need-weather.vercel.app",
      desc: "Projeto academico desenvolvido com intuito de ser uma rede social interna dentro da instituição Fatec Guaratinguetá",
    },
  ];

  return (
    <div>
      <h1>Projetos</h1>
      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div className={styles.projectcard}>
            <img className={styles.image} src={project.image} alt="" />
            <p>{project.desc}</p>
            <a className={styles.btnProjeto} href={project.link}>GitHub</a>
            <a className={styles.btnProjeto} href={project.link}>Ver projeto</a>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
