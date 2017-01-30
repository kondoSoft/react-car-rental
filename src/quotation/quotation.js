import React, { Component } from 'react';
import SingleCar from '../components/single-car/singleCar'
import FormCar from '../components/form-car/formCar'
import { Container } from 'semantic-ui-react'


class QuotationPage extends Component {

  render() {
    return (
       <Container className='containerQuotation'>
          <div className='contentSingleCar'>
            <SingleCar/>
            <SingleCar/>
          </div>
          <FormCar/>
        </Container>
    );
  }
}

export default QuotationPage;
