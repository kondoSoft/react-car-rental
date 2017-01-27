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

export class Quotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Quotation"
          meta={[
            { name: 'description', content: 'Description of Quotation' },
          ]}
        />
      </div>
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
