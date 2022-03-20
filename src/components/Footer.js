import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link to='/legal-mentions' className='text-white text-decoration-none p-1 p-sm-2'>Mentions légales</Link>
        <Link to='/sitemap' className='text-white text-decoration-none p-1 p-sm-2'>Plan du site</Link>
        <a href='https://www.google.com' className='text-white text-decoration-none p-1 p-sm-2'>Site réalisé par Théo Sagniez</a>
    </footer>
  )
}

export default Footer