

import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MainAvailable from './MainAvailable';
import SingleCar from '../components/single-car/singleCar'
import FormCar from '../components/form-car/formCar'
import FormCarReserve from '../components/form-car-reserve/formCarReserve'
import FormCarReserveRight from '../components/form-car-reserve-right/formCarReserveRight'


// import s from './styles.css';
import { Container } from 'semantic-ui-react'


class HomePage extends Component {

  render() {
    return (
      <Layout>
        {/* <MainAvailable /> */}
        {/* <Container className='containerQuotation'>
          En este div va el componente SingleCar de Quotation
          <div className='contentSingleCar'>
            <SingleCar/>
            <SingleCar/>
          </div>
          <FormCar/>
        </Container> */}
        <Container className='containerReserve'>
          <div className='contentReserveSingleCar'>
              <FormCarReserve/>
              <div className='reserveSingleCar'>
                <SingleCar/>
              </div>
          </div>
          <div className='contentFormReserves'>
            <FormCarReserveRight/>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default HomePage;
