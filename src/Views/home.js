import React, { useState, useEffect } from 'react'

import {
  Col,
  Row,
  Card,
} from 'react-bootstrap'

import { getUsuarios } from '../http/index'

const home = () => {

  //const [tot, setTot] = useState([])

  


  return (
    <div style={{ marginTop: '30px' }}>
      <Row>
        <Col>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Total de Usuarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">En base de datos</Card.Subtitle>
              <Card.Text>
                <h1></h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Usuarios Restantes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">En base de datos</Card.Subtitle>
              <Card.Text>
                <h1>200</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Total de Comentarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Christian</Card.Subtitle>
              <Card.Text>
                <h1>200</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Total de Comentarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Andrea</Card.Subtitle>
              <Card.Text>
                <h1>200</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </div>
  )
}

export default home
