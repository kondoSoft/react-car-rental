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

export class Reserve extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Reserve"
          meta={[
            { name: 'description', content: 'Description of Reserve' },
          ]}
        />
      </div>
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
