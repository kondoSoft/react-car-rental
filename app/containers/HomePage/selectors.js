import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');
console.log(selectHomePageDomain);

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);
const makeSelectCarstoAvailable = ()=> createSelector(
  selectHomePageDomain(),
  (state) => state.get('cars'),
)
const makeSelectCars = ()=> createSelector(
  selectHomePageDomain(),
  (state) => state.get('values').toJS(),
)
const makeSelectComments = ()=> createSelector(
  selectHomePageDomain(),
  (state) => state.get('comments')
)
export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectCars,
  makeSelectComments,
  makeSelectCarstoAvailable,
};
