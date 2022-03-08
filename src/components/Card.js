import React from 'react'
import styles from '../css/Card.module.css'

const Card = ({ title, icon, applications }) => {
  return (
    <div className={styles.container}>
        {/* Check how to include icon web fonts so that only className has to be passed as prop */}
        <i className={icon}></i>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.ul}>
            {
                applications.map((application, index) => {
                    return (
                        <li key={index}  className={styles.li}>{application}</li>
                    )
                })
            }
        </ul>
        <button className={styles.button}><b>En savoir plus</b></button>
    </div>
  )
}

export default Card