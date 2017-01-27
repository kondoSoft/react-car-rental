/*
 *
 * Reserve
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectReserve from './selectors';
import FormCarReserve from '../../components/FormCarReserve'
import FormCarReserveRight from '../../components/FormCarReserveRight'
import SingleCarReserve from '../../components/SingleCarReserve'
import {Container} from 'semantic-ui-react'

export class Reserve extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <Container className='containerReserve'>
          <Helmet
            title="Reserve"
            meta={[
              { name: 'description', content: 'Description of Reserve' },
            ]}
          />
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

Reserve.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Reserve: makeSelectReserve(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
