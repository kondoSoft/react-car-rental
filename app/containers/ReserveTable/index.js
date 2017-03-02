/*
 *
 * ReserveTable
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectReserveTable from './selectors';

export class ReserveTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ReserveTable"
          meta={[
            { name: 'description', content: 'Description of ReserveTable' },
          ]}
        />
      </div>
    );
  }
}

ReserveTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reserveTable: makeSelectReserveTable(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReserveTable);
