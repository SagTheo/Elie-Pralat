import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Nav className="justify-content-center bg-dark" activeKey="#">
            <Nav.Item>
                <Nav.Link href="#" className='text-white'>Mentions légales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" className='text-white'>Plan du site</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" className='text-white'>Site réalisé par Théo Sagniez</Nav.Link>
            </Nav.Item>
        </Nav>
    </footer>
  )
}

export default Footer