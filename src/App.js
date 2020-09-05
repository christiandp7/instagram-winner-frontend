import React from 'react'
import { BrowserRouter as Router, Switch, NavLink as Link, Route } from 'react-router-dom'
import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap'

import Home from './Views/home'
import Users from './Views/users'
import AddUsers from './Views/add-users'

import 'app.css'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">InstagramWinner</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" activeClassName="active" exact to="/">
              Inicio
          </Link>
          <Link className="nav-link" activeClassName="active" exact to="/users">
              Usuarios
          </Link>
          <Link className="nav-link" activeClassName="active" exact to="/add">
              Agregar
          </Link>
        </Nav>
      </Navbar>

      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users"> 
            <Users />
          </Route>
          <Route exact path="/add"> 
            <AddUsers />
          </Route>
          <Route path="*">
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </Container>

    </Router>
  )
}

export default App
