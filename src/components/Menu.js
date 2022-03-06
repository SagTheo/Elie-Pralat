import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Menu = ({ logo, tabs }) => {
  return (
    //Play around with fixed prop for Navbar
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">{logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
              {
                  tabs.map((tab, index) => {
                      return (
                      <Nav.Link key={index} href={`#${tab.id}`}>{tab.title}</Nav.Link>
                      )
                  })
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu