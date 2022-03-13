import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const BSForm = () => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="mail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Envoyer
        </Button>
    </Form>
  )
}

export default BSForm