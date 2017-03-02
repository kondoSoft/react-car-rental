import { createSelector } from 'reselect';

/**
 * Direct selector to the reserveTable state domain
 */
const selectReserveTableDomain = () => (state) => state.get('reserveTable');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReserveTable
 */

const makeSelectReserveTable = () => createSelector(
  selectReserveTableDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReserveTable;
export {
  selectReserveTableDomain,
};
