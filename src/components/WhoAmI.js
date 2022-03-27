import React, { useContext } from 'react'
import { StylesContext } from '../context.js'
import styles from '../css/WhoAmI.module.css'
import img from '../img/landscape.jpg'
import { Quote } from 'react-bootstrap-icons'

const WhoAmI = ({ id }) => {
    const commonStyles = useContext(StylesContext)

    return (
        <>
            <section style={{ paddingTop: commonStyles.section, minHeight: commonStyles.minHeight  }}
                     id={id}>
                <div className={styles.content}>
                    <div className={styles.bg} >
                        <div className={styles.container}>
                            <h2 className={styles.h2} style={{ fontSize: commonStyles.h2Size }}>Qui-suis-je ?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis quam id ex egestas pulvinar. Mauris ac sodales ex. Sed quis hendrerit magna, nec hendrerit risus. Maecenas vel venenatis diam. Sed eget tellus viverra, fringilla felis eu, efficitur nunc. Vestibulum pharetra lectus mauris, quis pretium mauris commodo id. Nam vel lectus sed est lobortis ullamcorper. Mauris mollis nibh nulla, sed consectetur lorem scelerisque non. Vivamus vel feugiat lectus. Curabitur eleifend dui augue, et convallis tortor imperdiet non. Vestibulum maximus dolor sit amet ipsum feugiat pretium. Suspendisse vel turpis dignissim, pulvinar odio ac, condimentum ex. Aliquam a dignissim nunc. Morbi finibus enim eu nibh placerat fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                            </p>
                        </div>
                    </div>
                    <div className={styles.bottomContainer}>
                        <img src={img} alt='landscape' className={styles.img} /> 
                    </div>
                </div>
                
                <blockquote className={styles.quote}>
                        <Quote color="#10256c" size={60} />
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Eizmel</i></p>
                </blockquote>
            </section>            
        </>
    )
}

export default WhoAmI