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
const selectHomePageState = () => (state) => state.get('homePage').toJS();

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
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
  selectHomePageState,
};
