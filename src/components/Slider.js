import style from "./slider.module.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

//icons slider
import img1 from "../img/needprice.png";
import img2 from "../img/needweather.png";
import img3 from "../img/needprojects.png";
import img4 from "../img/fateclub.jpg";

const images = [img2, img1, img3, img4];

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
              <motion.div className={style.item} key={image}>
                <img src={image} alt="texto" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
