import { createSelector } from 'reselect';

/**
 * Direct selector to the reserve state domain
 */
const selectReserveDomain = () => (state) => state.get('reserve');

/**
 * Other specific selectors
 */
const selectReserveState = () => (state) => state.get('reserve').toJS();

/**
 * Default selector used by Reserve
 */

const makeSelectReserve = () => createSelector(
  selectReserveDomain(),
  (substate) => substate.toJS()
)

const makeSelectClient = ()=> createSelector(
  selectReserveDomain(),
  (state) => state.get('request').toJS(),
)

export default makeSelectReserve;

export {
  selectReserveDomain,
  selectReserveState,
  makeSelectClient,
};
