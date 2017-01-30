import React, { Component } from 'react';
import SingleCarReserve from '../components/single-car-reserve/singleCarReserve'
import FormCarReserve from '../components/form-car-reserve/formCarReserve'
import FormCarReserveRight from '../components/form-car-reserve-right/formCarReserveRight'
import { Container } from 'semantic-ui-react'


class ReservePage extends Component {

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

export default ReservePage;
