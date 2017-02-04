import { createSelector } from 'reselect';
/**
 * Direct selector to the available state domain
 */
const selectAvailableDomain = () => (state) => state.get('available');
// const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
 // const makeSelectCarstoAvailable = ()=> createSelector(
 //   selectHomePageDomain(),
 //   (state) => state.get('cars')
 // )
/**
 * Default selector used by Available
 */

const makeSelectAvailable = () => createSelector(
  selectAvailableDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAvailable;
export {
  selectAvailableDomain,
  // makeSelectCarstoAvailable
};
