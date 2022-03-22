import React, { useContext } from 'react'
import styles from '../css/Home.module.css'
import { StylesContext } from '../context.js'

const Home = ({ id }) => {
  const commonStyles = useContext(StylesContext)

  return (
    <div className={styles.bgHomePage} id={id}>
        <div className={styles.content}>
            <h1>Hypnose à Valenciennes</h1>
            <p className={styles.tel}><b>06 47 43 14 00</b></p>
            <div>

            </div>
            <button className={styles.button}
                    style={{ backgroundColor:  commonStyles.color}}
            ><a href='#rdv'>Prendre rendez-vous</a></button>  
        </div>
    </div>
  )
}

export default Home