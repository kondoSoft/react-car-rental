/*
 *
 * ReserveList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectReserveList from './selectors';
import { Container, Table, Input } from 'semantic-ui-react'
import TableReserve from '../../components/TableReserve'
import { loadReserveList, cancelReserve, authorizationReserve, deleteReserve, printReserve } from './actions'
import moment from 'moment'
import ReactPaginate from 'react-paginate';

export class ReserveList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.loadReserveList()
  }

  createRowList(list,i){
    return(
      <TableReserve data={list} key={'row'+i} printReserve={this.props.printReserve} cancelReserve={this.props.cancelReserve} authorizationReserve={this.props.authorizationReserve} deleteReserve={this.props.deleteReserve}/>
    )
  }


  render() {
    const list = this.props.ReserveList.preReserve
    return (
      <Container>
        <Helmet
          title="Mis Reservas"
          meta={[
            { name: 'description', content: 'Description of ReserveList' },
          ]}
        />

      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Auto</Table.HeaderCell>
            <Table.HeaderCell>Fecha Renta</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Proveedor</Table.HeaderCell>
            <Table.HeaderCell>Estatus</Table.HeaderCell>
            <Table.HeaderCell>Acción</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { list.map((item,i) => { return this.createRowList(item,i)} )}
        </Table.Body>
      </Table>
      </Container>
    );
  }
}

ReserveList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ReserveList: makeSelectReserveList(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadReserveList:(type)=>{
      dispatch(loadReserveList(type))
    },
    cancelReserve:(type)=>{
      dispatch(cancelReserve(type))
    },
    authorizationReserve:(type)=>{
      dispatch(authorizationReserve(type))
    },
    deleteReserve:(type)=>{
      dispatch(deleteReserve(type))
    },
    printReserve:(type)=>{
      dispatch(printReserve(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReserveList);
