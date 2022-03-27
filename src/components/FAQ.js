import React, { useContext } from 'react'
import { StylesContext } from '../context.js'
import Accordion from 'react-bootstrap/Accordion'
import styles from '../css/FAQ.module.css'

const FAQ = ({ id }) => {
  const commonStyles = useContext(StylesContext)

  return (
    <section className={styles.bg} style={{ paddingTop: commonStyles.section, minHeight: commonStyles.minHeight  }} id={id}>
        <div className={styles.container}>
            <h2 className={styles.h2} style={{ fontSize: commonStyles.h2Size }}>Foire aux questions</h2>
            <p className={styles.p}>Et si votre question n'a pas de réponse, n'hésitez pas à me contacter.
                <br/>
               Je me ferai un plaisir d'y répondre.
            </p>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question 1</Accordion.Header>
                    <Accordion.Body className={styles.accordion}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question 2</Accordion.Header>
                    <Accordion.Body className={styles.accordion}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question 3</Accordion.Header>
                    <Accordion.Body className={styles.accordion}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>    
        </div>
    </section>
  )
}

export default FAQ