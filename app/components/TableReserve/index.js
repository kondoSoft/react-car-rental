/**
*
* TableReserve
*
*/

import React from 'react';
import {  Table, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'


function TableReserve(props) {
  if (props.data.Status == 'Pendiente') {
    var cls = 'statusPen'
  }
  else if (props.data.Status == 'Aprovado') {
    var cls = 'statusApr'
  }
  else{
    var cls = 'statusCan'
  }
  return (
    <Table.Row>
      <Table.Cell>{props.data.ID}</Table.Cell>
      <Table.Cell>{props.data.Name}</Table.Cell>
      <Table.Cell>{props.data.LastName}</Table.Cell>
      <Table.Cell>{props.data.Email}</Table.Cell>
      <Table.Cell>{props.data.Car}</Table.Cell>
      <Table.Cell>{props.data.ReserveDate}</Table.Cell>
      <Table.Cell>$ {props.data.Amount}</Table.Cell>
      <Table.Cell>{props.data.ID}</Table.Cell>
      <Table.Cell className={ cls }>{props.data.Status}</Table.Cell>
      <Table.Cell><Link to=''><Icon name='print'/></Link><Link to=''><Icon name='checkmark'/></Link><Link to=''><Icon name='remove'/></Link></Table.Cell>
    </Table.Row>
  );
}

TableReserve.propTypes = {

};

export default TableReserve;
