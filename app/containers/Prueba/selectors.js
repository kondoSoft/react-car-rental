import { createSelector } from 'reselect';

/**
 * Direct selector to the prueba state domain
 */
const selectPruebaDomain = () => (state) => state.get('prueba');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Prueba
 */

const makeSelectPrueba = () => createSelector(
  selectPruebaDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPrueba;
export {
  selectPruebaDomain,
};
