import React, { useContext } from 'react'
import styles from '../css/Home.module.css'
import { StylesContext } from '../context.js'

const Home = () => {
  const commonStyles = useContext(StylesContext)

  return (
    <div className={styles.bgHomePage} id="accueil">
        <div className={styles.content}>
            <h1>Hypnose à Valenciennes</h1>
            <p className={styles.tel}><b>06 47 43 14 00</b></p>
            <div>

            </div>
            <button className={styles.button}
                    style={{ backgroundColor:  commonStyles.color}}
            >Prendre rendez-vous</button>  
        </div>
    </div>
  )
}

export default Home