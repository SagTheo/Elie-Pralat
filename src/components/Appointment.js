import React, { useContext } from 'react'
import { StylesContext } from '../context.js'
import BSForm from './BSForm.js'
import styles from '../css/Appointment.module.css'

const Appointment = ({ id }) => {
  const commonStyles = useContext(StylesContext)

  return (
    <section style={{ paddingTop: commonStyles.section, minHeight: commonStyles.minHeight  }} id={id}>
      <div className={styles.container}>
        <h2 style={{ color: commonStyles.color, fontSize: commonStyles.h2Size }}>Prendre rendez-vous</h2>
        <BSForm />
        <div style={{ width: '100%', marginTop: '1rem' }}>
          <iframe width="100%" 
                  height="400" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0"
                  title='Map' 
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=hell's%20kitchen,%20new%20york+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/marine-gps/">shipping gps</a>
          </iframe>
        </div>
      </div>
    </section> 
  )
}

export default Appointment