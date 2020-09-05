import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'

import axios from 'axios'
import swal from '@sweetalert/with-react'

import { getUsuarios } from '../http/index'

import {
  Table,
  Spinner,
  Badge,
  Button
} from 'react-bootstrap'

function UsersTable() {  

  const [users, setUsers] = useState([]);
  const [usersData, setUsersData] = useState({})

  const [pagPage, setPagPage] = useState(1)
  const [pagSizePerPage, setPagSizePerPage] = useState(10)


  const renderDataToTable = () => {
    const currentIndex = (pagPage - 1) * pagSizePerPage;
    getUsuarios(currentIndex, pagSizePerPage).then(resp => {
    //getUsuarios().then(resp => {
      //console.log(resp.data)
      setUsers(resp.data.usuarios)
      setUsersData(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    renderDataToTable()
  }, [])



  

  const imageFormatter = (cell, row) => {
    return (<img className="roundedCircle avatar" src={cell} />)
  }

  const usernameFormatter = (cell, row) => {
    return (<a target="_blank" href={`https://instagram.com/${cell}`}>{cell}</a>)
  }

  const usedByFormatter = (cell, row) => {
    if(cell === true){
      return ( <Badge variant="danger">Usado</Badge>)
    } else {
      return ( <Badge variant="success">Libre</Badge>)
    }
    
  }

  const deleteColFormatter = (cell, row) => {
    return (
      <Button
        variant="danger"
        onClick={() => deleteUser(row)}
      >Eliminar</Button>
    )
  }

  const deleteUser = (user) => {
    swal({
      title: "Eliminar: ",
      content: (
        <div className="pb-3">
          <img className="avatar lg" src={user.image} />
          <h5>{user.username}</h5>
        </div>
      ),
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          text: "Cancelar",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Confirmar",
          value: true,
          visible: true,
          closeModal: true
        }
      }
    })
    .then(willDelete => {
      if (willDelete) {
        axios({
          method: 'delete',
          url: 'https://api-instagram-winner.herokuapp.com/users/' + user._id,
        }).then((response) => {
          if(response.data.ok){
            swal("OK", `Se eliminó ${user.username} corretamente!`, "success");
            //renderDataToTable();
          } else {
            console.log(response.data);
            swal("Error", `No se pudo eliminar ${user.username} de la base de datos!`, "error");
          }
        }, (error) => {
          swal("Oops!", "No se pudo enviar los datos para eliminar el usuario", "error");
          console.log(error);
        });
      }
    });
  }


  const columns = [
    { dataField: '_id', text: 'ID', hidden: true, align: 'left' },
    { dataField: 'image', text: 'Imagen', align: 'left', formatter: imageFormatter }, 
    { dataField: 'username', text: 'Usuario', align: 'left', formatter: usernameFormatter, style: { verticalAlign: 'middle' } }, 
    { dataField: 'name', text: 'Nombre', align: 'left', style: { verticalAlign: 'middle' } },
    { dataField: 'usedByChristian', text: 'Christian', align: 'left', formatter: usedByFormatter, style: { verticalAlign: 'middle' } },
    { dataField: 'usedByAndrea', text: 'Andrea', align: 'left', formatter: usedByFormatter, style: { verticalAlign: 'middle' } },
    { dataField: '', text: 'Eliminar', isDummyField: true, formatter: deleteColFormatter, style: { verticalAlign: 'middle' } },
  ];


  const handleTableChange = (pagination, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    //getUsuarios()
    //console.log(currentIndex)
    //console.log(page + " ... " + sizePerPage)
    getUsuarios(currentIndex, sizePerPage).then(resp => {
      //console.log(resp.data)
      //debugger
      setUsers(resp.data.usuarios)
      //debugger
      setPagPage(page)
      //debugger
      setPagSizePerPage(sizePerPage)
      //debugger
      setUsersData(resp.data)
      //debugger

    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <>
          <h5>Total en BD: { usersData.totalUsuariosBD } </h5>
          <BootstrapTable 
            bootstrap4
            striped
            wrapperClasses="table-responsive"
            classes="tablesorter" 
            keyField="_id" 
            data={ users } 
            columns={ columns } 
            remote={{
              filter: false,
              pagination: true,
              sort: false,
            }} 
            onTableChange={handleTableChange}
            pagination={ paginationFactory({
              className: "pagination-lg",
              totalSize: usersData.totalUsuariosBD,
              page: pagPage,
              sizePerPage: pagSizePerPage
              //sizePerPageRenderer
            }) }
            bordered={ false }
          />

    </>
  )
}

export default UsersTable
