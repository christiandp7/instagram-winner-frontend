import React from 'react'

import {
  Col,
  Row,
  Card,
} from 'react-bootstrap'

function home() {
  return (
    <div style={{ marginTop: '30px' }}>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        
        </Col>
      </Row>
      
    </div>
  )
}

export default home
