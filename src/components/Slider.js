import style from "./slider.module.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


//icons slider
import img1 from "../img/needprice.png";
import img2 from "../img/needweather.png";
import img3 from "../img/needprojects.png";
import img4 from "../img/needpets.png";
// https://gabriel-zokah.s3.sa-east-1.amazonaws.com/bootstrap.png
const images = [
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
    name: "Need Pets",
    link: "https://need-pets.vercel.app",
    desc: "Landing Page De petshop desenvolvido com React JS",
  },
];

const Home = () => {
  const slider = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(slider.current?.scrollWidth, slider.current?.offsetWidth);
    setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
  }, []);

  return (
    <div>
      <div className={style.features}>
        <motion.div
          ref={slider}
          className={style.sliderContainer}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={style.inner}
            drag={"x"}
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <motion.div className={style.item} key={image.link}>
                <img src={image.image} alt="texto" />
                <div className={style.SubContainer}>
                  <p className={style.desc}>{image.desc}</p>
                  <button className={style.btn_projeto}>
                    <a href={image.link}>Ver projeto</a>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className={style.lastDiv}>
          <button className={style.btn_verTodos}>
            {" "}
            <Link to={"/Projects"}>Ver todos os projetos
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
