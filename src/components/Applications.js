import React, { useContext } from 'react'
import { StylesContext } from '../context.js'
import styles from '../css/Applications.module.css'
import Card from './Card.js'
import { Bank2 } from 'react-bootstrap-icons'
import { Bookshelf } from 'react-bootstrap-icons';
import { Droplet } from 'react-bootstrap-icons';

const Applications = () => {
    const commonStyles = useContext(StylesContext)

    return (
        <section className={styles.bg} style={{ paddingTop: commonStyles.section }} id="applications">
            <div style={{ margin: commonStyles.container }}>
                <h2 style={{ color: commonStyles.color }}>Applications</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis quam id ex egestas pulvinar. Mauris ac sodales ex. Sed quis hendrerit magna, nec hendrerit risus. Maecenas vel venenatis diam. Sed eget tellus viverra, fringilla felis eu, efficitur nunc. Vestibulum pharetra lectus mauris, quis pretium mauris commodo id. Nam vel lectus sed est lobortis ullamcorper. Mauris mollis nibh nulla, sed consectetur lorem scelerisque non. Vivamus vel feugiat lectus. Curabitur eleifend dui augue, et convallis tortor imperdiet non. Vestibulum maximus dolor sit amet ipsum feugiat pretium. Suspendisse vel turpis dignissim, pulvinar odio ac, condimentum ex. Aliquam a dignissim nunc. Morbi finibus enim eu nibh placerat fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                </p>
                <div>
                   <Card
                        icon={<Bank2 color="orange" size={32} />}
                        title="Card 1"
                        applications={[
                            'Application 1',
                            'Application 2',
                            'Application 3',
                            'Application 4'
                        ]}
                    />
                    <Card 
                        icon={<Bookshelf color="orange" size={32} />}
                        title="Card 2"
                        applications={[
                            'Application 1',
                            'Application 2',
                            'Application 3',
                            'Application 4'
                        ]}
                    /> 
                    <Card 
                        icon={<Droplet color="orange" size={32} />}
                        title="Card 3"
                        applications={[
                            'Application 1',
                            'Application 2'
                        ]}
                    /> 
                </div>
            </div>
        </section>
    )
}

export default Applications