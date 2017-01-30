/*
 *
 * Prueba
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPrueba from './selectors';
import {defaultAction} from './actions'

export class Prueba extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Prueba"
          meta={[
            { name: 'description', content: 'Description of Prueba' },
          ]}
        />
        <p></p>
        <button onClick={this.props.defaultAction}>Hola</button>
      </div>
    );
  }
}

Prueba.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Prueba: makeSelectPrueba(),
});

function mapDispatchToProps(dispatch) {
  return {
    defaultAction: (type)=>{
      dispatch(defaultAction(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Prueba);
