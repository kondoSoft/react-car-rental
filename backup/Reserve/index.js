/*
 *
 * Reserve
 *
 */

import React from 'react';
import { Container } from 'semantic-ui-react'
import FormCarReserve from '../../components/FormCarReserve'
import FormCarReserveRight from '../../components/FormCarReserveRight'
import SingleCarReserve from '../../components/SingleCarReserve'

export default class Reserve extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container className='containerReserve'>
        <div className='contentReserveSingleCar'>
            <FormCarReserve/>
            <SingleCarReserve/>
        </div>
        <div className='contentFormReserves'>
          <FormCarReserveRight/>
        </div>
      </Container>
    );
  }
}
