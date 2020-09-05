import React, { useState, useEffect } from 'react'
import UsersTable from '../components/UsersTable'


import { Spinner } from 'react-bootstrap'

function Users() {


  return (
    <div>
      <br />

      <h1>Usuarios</h1>
      <UsersTable />
    </div>
  )
}

export default Users
