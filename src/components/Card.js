import React from 'react'
import styles from '../css/Card.module.css'

const Card = ({ title, icon, applications }) => {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
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