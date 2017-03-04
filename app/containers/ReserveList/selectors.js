import { createSelector } from 'reselect';

/**
 * Direct selector to the reserveList state domain
 */
const selectReserveListDomain = () => (state) => state.get('reserveList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ReserveList
 */

const makeSelectReserveList = () => createSelector(
  selectReserveListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReserveList;
export {
  selectReserveListDomain,
};
