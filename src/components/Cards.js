import React, { useState, useEffect } from 'react'
import {
  Col,
  Row,
  Card,
} from 'react-bootstrap'

import { getUsuarios } from '../http/index'

function Cards() {


  const [total, setTotal] = useState([])

  useEffect(() => {
    getUsuarios(0,1).then(resp => {
      console.log(resp.data.totalUsuariosBD)
      setTotal(resp.data.totalUsuariosBD)
    })
  }, [])


  return (
    <>
      <Row>
        <Col>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Total de Usuarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">En base de datos</Card.Subtitle>
              <Card.Text>
                <h1>{total}</h1>
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
                <h1>-</h1>
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
                <h1>-</h1>
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
                <h1>-</h1>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Cards
