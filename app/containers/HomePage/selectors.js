import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

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
const makeSelectCars = ()=> createSelector(
  selectHomePageDomain(),
  (state) => state.get('cars')
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
};
