import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <footer bg="dark" data-bs-theme="dark">
      <Card>
        <Card.Header as="h5" bg>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card></footer>
  )
}
