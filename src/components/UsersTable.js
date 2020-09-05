import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'



import {
  Table,
  Spinner,
  Badge
} from 'react-bootstrap'

function UsersTable({ users }) {  




  const imageFormatter = (cell, row) => {
    return (<img className="avatar" src={cell} />)
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


  const columns = [
    { dataField: '_id', text: 'ID', hidden: true, align: 'left' },
    { dataField: 'image', text: 'Imagen', align: 'left', formatter: imageFormatter }, 
    { dataField: 'username', text: 'Usuario', align: 'left', formatter: usernameFormatter, style: { verticalAlign: 'middle' } }, 
    { dataField: 'name', text: 'Nombre', align: 'left', style: { verticalAlign: 'middle' } },
    { dataField: 'usedByChristian', text: 'Christian', align: 'left', formatter: usedByFormatter, style: { verticalAlign: 'middle' } },
    { dataField: 'usedByAndrea', text: 'Andrea', align: 'left', formatter: usedByFormatter, style: { verticalAlign: 'middle' } },
  ];



  return (
    <>

          <BootstrapTable 
            bootstrap4
            wrapperClasses="table-responsive"
            classes="tablesorter" 
            keyField="_id" 
            data={ users } 
            columns={ columns } 
            pagination={ paginationFactory({
              className: "pagination-lg",
              //sizePerPageRenderer
            }) }
            bordered={ false }
          />

    </>
  )
}

export default UsersTable
