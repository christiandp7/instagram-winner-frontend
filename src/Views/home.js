import React, { useState, useEffect } from 'react'
import UsersTable from '../components/UsersTable'

import { getUsuarios } from '../http/index'
import { Spinner } from 'react-bootstrap'

function Home() {

  const [users, setUsers] = useState([]);


  const renderDataToTable = async () => {
    await getUsuarios().then(resp => {
      console.log(resp.data.usuarios)
      setUsers(resp.data.usuarios)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    renderDataToTable()
  }, [])


  return (
    <div>
      <br />
      <h1>Home</h1>
      {
        users === [] ?
        (<Spinner animation="border" />)
        : (<UsersTable users={users} />)
      }
      
    </div>
  )
}

export default Home
