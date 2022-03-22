import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StylesContext } from '../context.js'
import styles from '../css/SiteMap.module.css'
import { HouseDoorFill } from 'react-bootstrap-icons'

const SiteMap = () => {
  const commonStyles = useContext(StylesContext)

  return (
    <>
      <div className='ms-3 mb-1'>
        <Link to='/'>
          <HouseDoorFill color='black' size={32} />
        </Link>
      </div>
      <div className={styles.container}>
        <h1 style={{ color: commonStyles.color }}>Plan du site</h1>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
          <li>Page 4</li>
          <li>Page 5</li>
        </ul>
      </div>
    </>
  )
}

export default SiteMap