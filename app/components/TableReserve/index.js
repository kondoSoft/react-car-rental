/**
*
* TableReserve
*
*/

import React from 'react';
import {  Table, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router'


function TableReserve(props) {
  function validation(type){
    if (type=='cancel') {
      var r = confirm("Esta seguro de cancelar la reserva?");
      if (r == true) {
         props.cancelReserve(props.data.idPrebooking)
      }
    }
    else{
      var r = confirm("Esta seguro de eliminar la reserva permanentemente?");
      if (r == true) {
         props.deleteReserve(props.data.idPrebooking)
      }
    }

  }
  function setButton(data)

  {
      // onClick={()=>{ props.printReserve(props.data.idPrebooking)}}
    if (data == 'Aprovado') {
      return(
        <Table.Cell>
          <Link className='printButton' to={`http://localhost:8000/print_voucher/${props.data.idPrebooking}`} target='_black'><Icon name='print' size='small'/></Link>
          <button className='buttonPen' onClick={()=>{ validation('cancel')}}><Icon name='ban' size='small'/></button>
        </Table.Cell>
      )
    }
    else if (data == 'Cancelado') {
      return(
        <Table.Cell>
          <button className='buttonPen' onClick={()=>{ props.authorizationReserve(props.data.idPrebooking)}}><Icon name='checkmark' size='small'/></button>
          <button className='buttonPen' onClick={()=>{ validation('delete')}}><Icon name='trash outline' size='small'/></button>
        </Table.Cell>
      )
    }
    else {
      return(
        <Table.Cell>
          <button className='buttonPen' onClick={()=>{ props.authorizationReserve(props.data.idPrebooking)}}><Icon name='checkmark' size='small'/></button>
          <button className='buttonPen' onClick={()=>{ validation('delete')}}><Icon name='trash outline' size='small'/></button>
        </Table.Cell>
      )
    }
  }
  if (props.data.status == 'Pendiente') {
    var cls = 'statusPen'
  }
  else if (props.data.status == 'Aprovado') {
    var cls = 'statusApr'
  }
  else{
    var cls = 'statusCan'
  }
  function formatDate(data){
      var format = data.substring(0,10)
      return format
  }
  return (
    <Table.Row>
      <Table.Cell>{props.data.idPrebooking}</Table.Cell>
      <Table.Cell>{props.data.name}</Table.Cell>
      <Table.Cell>{props.data.lastName}</Table.Cell>
      <Table.Cell>{props.data.email}</Table.Cell>
      <Table.Cell>{props.data.car_name}</Table.Cell>
      <Table.Cell>{formatDate(props.data.pick_date)}</Table.Cell>
      <Table.Cell>$ {props.data.price}</Table.Cell>
      <Table.Cell><img width='80' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/ico/${props.data.vendor}.png`} alt="Nombre del proveedor"/></Table.Cell>
      <Table.Cell className={ cls }>{props.data.status}</Table.Cell>
      {setButton(props.data.status)}
    </Table.Row>
  );
}

TableReserve.propTypes = {

};

export default TableReserve;
