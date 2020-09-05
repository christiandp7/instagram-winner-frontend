import React, { useState, useEffect } from 'react'
import axios from 'axios'

import swal from 'sweetalert';

import {
  Form,
  Button
} from 'react-bootstrap'

function AddUsers() {

  const [textarea, setTextarea] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const canva = document.getElementById('canva');
    canva.innerHTML = textarea;

    let usersList = canva.querySelectorAll('li')

    //console.log(usersList)

    let usersListJson = []

    Array.prototype.forEach.call(usersList, item => {
      //console.log(item)
      usersListJson.push({
        username: item.querySelector('span > a').innerHTML,
        //name: item.querySelector('div > div:nth-child(2) > div:nth-child(2) > div').innerHTML,
        name: item.querySelector('.wFPL8').innerHTML,
        image: item.querySelector('img').src,
        usedByChristian: false,
        usedByAndrea: false,
      })
    })

    //Print Data in Console
    console.log(usersListJson)
    
    // Ask for send
    swal({
      title: "Enviar",
      text: "Desea enviar los datos en consola?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willSend => {
      if (willSend) {
        axios({
          method: 'post',
          url: 'https://api-instagram-winner.herokuapp.com/users',
          data: {
            usuarios: usersListJson
          }
        }).then((response) => {
          console.log(response.data);
          if(response.data.ok){
            swal("OK", `Se insertaron ${response.data.nuevosUsuarios.insertedCount} usuarios corretamente!`, "success");
          } else {
            swal("Error", "No se insertaron los datos en la BD, ver consola!", "error");
          }
        }, (error) => {
          swal("Oops!", "No se pudieron enviar los datos", "error");
          console.log(error);
        });
      }
    });

    // send to backend
    


  }

  const canvaStyles = {
    display: 'none'
  }

  return (
    <div>
      <br />
      <h1>Agregar Usuarios</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>HTML Code</Form.Label>
          <Form.Control as="textarea" value={textarea} onChange={e => setTextarea(e.target.value)}  rows="6" />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button variant="secondary" className="ml-2" onClick={() => setTextarea('')}>
          Reset
        </Button>
      </Form>

      

      <div id="canva" style={canvaStyles}></div>


      {/*<SweetAlert title="Here's a message!" onConfirm={} onCancel={} />*/}

    </div>
  )
}

export default AddUsers
