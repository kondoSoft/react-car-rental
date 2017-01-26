/*
 *
 * Quotation
 *
 */

import React from 'react';
import {Container} from 'semantic-ui-react'
import SingleCar from '../../components/SingleCar'
import FormCar from '../../components/FormCar'

export default class Quotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
