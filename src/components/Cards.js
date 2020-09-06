import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import {
  Col,
  Row,
  Card,
} from 'react-bootstrap'

import { getStats } from '../http/index'

function Cards() {


  const [total, setTotal] = useState(0)
  const [totalChristian, setTotalChristian] = useState(0)
  const [totalAndrea, setTotalAndrea] = useState(0)

  useEffect(() => {
    getStats(0,1).then(resp => {
      setTotalChristian(resp.ubc)
      setTotalAndrea(resp.uba)
      setTotal(resp.total)
    })
  }, [])
  

  return (
    <>
      <h2>Usuarios</h2>
      <Row>
        <Col xs={6} md={3}>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Total de Usuarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">En base de datos</Card.Subtitle>
                <h1><CountUp end={total} duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Usuarios Disponibles</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Restantes</Card.Subtitle>
              <h1><CountUp end={ total - (totalChristian + totalAndrea) } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Usados por Christian</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total</Card.Subtitle>
                <h1><CountUp end={ totalChristian } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Usados por Andrea</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total</Card.Subtitle>
                <h1><CountUp end={ totalAndrea } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <h2>Comentarios</h2>
      <Row>
        <Col xs={6} md={3}>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Comentarios</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Realizados</Card.Subtitle>
                <h1><CountUp end={ (totalChristian + totalAndrea) / 3 } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Comentarios Christian</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total</Card.Subtitle>
              <h1><CountUp end={ totalChristian / 3 } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Comentarios Andrea</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total</Card.Subtitle>
                <h1><CountUp end={ totalAndrea / 3 } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ maxWidth: '18rem' }}>
            <Card.Body>
              <Card.Title>Comentarios Restantes</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Sumados</Card.Subtitle>
                <h1><CountUp end={ (total - (totalChristian + totalAndrea)) / 3 } duration={2} /></h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Cards
