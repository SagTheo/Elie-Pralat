import React, { useContext } from 'react'
import { StylesContext } from '../context.js'
import BSForm from './BSForm.js'
import styles from '../css/Appointment.module.css'

const Appointment = () => {
  const commonStyles = useContext(StylesContext)

  return (
    <section style={{ paddingTop: commonStyles.section }} id="rdv">
      <div className={styles.container}>
        <h2 style={{ color: commonStyles.color, fontSize: commonStyles.h2Size }}>Prendre rendez-vous</h2>
        <BSForm />
      </div>
    </section> 
  )
}

export default Appointment