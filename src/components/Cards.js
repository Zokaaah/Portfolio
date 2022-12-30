import React from 'react'
import styles from './Cards.module.css'

import project1 from '../img/profilee.png'
import project2 from '../img/need.png'
import project3 from '../img/fateclub.jpg'
import project4 from '../img/dropit.png' 
import Brightness4Icon from '@mui/icons-material/Brightness4';


const Cards = () => {
  return (
    <div>
        <section className={styles.Cards}>
          <div className={styles.card}>
              <img src={project2} className={styles.cardImg} alt="" />
              <div className={styles.middle}>
              <div className={styles.text}>Need Projects</div>
          </div>
          </div>

          <div className={styles.card}>
              <img src={project3} className={styles.cardImg} alt="" />
              <div className={styles.middle}>
              <div className={styles.text}>Fateclub</div>
          </div>
          </div>

          <div className={styles.card}>
              <img src={project4} className={styles.cardImg} alt="" />
              <div className={styles.middle}>
              <div className={styles.text}>Drop It</div>
          </div>
          </div>

        
        </section>
    </div>
  )
}

export default Cards