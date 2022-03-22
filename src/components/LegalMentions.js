import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StylesContext } from '../context.js'
import styles from '../css/LegalMentions.module.css'
import { HouseDoorFill } from 'react-bootstrap-icons'

const LegalMentions = () => {
  const commonStyles = useContext(StylesContext)

  return (
    <>
      <div className='ms-3 mb-1'>
        <Link to='/'>
          <HouseDoorFill color='black' size={32} />
        </Link>
      </div>
      <div className={styles.container}>
        <h1 style={{ color: commonStyles.color }}>Mentions légales</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu consequat diam. Cras hendrerit enim nec est accumsan efficitur. Donec eu euismod orci, in faucibus nulla. Nunc tempus mollis neque, ac consequat risus pellentesque in. Mauris vitae est pellentesque, tempor nisi ac, tristique leo. Duis vulputate est nisl, vel interdum urna volutpat nec. Nulla facilisi. Aliquam vel lectus in massa imperdiet rutrum. Fusce laoreet diam id vestibulum tincidunt.</p>
        <p>Nullam consequat varius dui, et gravida velit vehicula quis. Nunc vitae feugiat sapien. Curabitur ac consequat nunc. Ut et risus molestie metus rutrum efficitur. Vestibulum ac tellus ac elit tristique pretium ullamcorper vel magna. Nullam elementum risus volutpat neque viverra, in porta ligula gravida. Morbi volutpat dui nibh, in tristique augue maximus id. Maecenas venenatis dapibus odio eget ultrices. Quisque ultrices enim ligula, sit amet fringilla ex consequat sit amet. Etiam a est interdum dolor cursus imperdiet. Nam aliquet erat dui, id fermentum ipsum maximus non. Curabitur facilisis aliquet dui quis malesuada. Nulla purus mauris, condimentum eu egestas eget, semper in quam. Proin id bibendum arcu. Nam diam felis, mattis nec nisl pulvinar, varius commodo dui. Phasellus id diam ut est tempor aliquam.</p>
      </div>
      
    </>
  )
}

export default LegalMentions