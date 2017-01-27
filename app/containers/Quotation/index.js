/*
 *
 * Quotation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectQuotation from './selectors';
import {Container} from 'semantic-ui-react'
import SingleCar from '../../components/SingleCar'
import FormCar from '../../components/FormCar'

export class Quotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <Container className='containerQuotation'>
        <Helmet
          title="Quotation"
          meta={[
            { name: 'description', content: 'Description of Quotation' },
          ]}
        />
         <div className='contentSingleCar'>
           <SingleCar/>
           <SingleCar/>
         </div>
         <FormCar/>
       </Container>

    );
  }
}

Quotation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Quotation: makeSelectQuotation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);
