import { createSelector } from 'reselect';

/**
 * Direct selector to the reserve state domain
 */
const selectReserveDomain = () => (state) => state.get('reserve');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Reserve
 */

const makeSelectReserve = () => createSelector(
  selectReserveDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReserve;
export {
  selectReserveDomain,
};
