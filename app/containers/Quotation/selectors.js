import { createSelector } from 'reselect';

/**
 * Direct selector to the quotation state domain
 */
const selectQuotationDomain = () => (state) => state.get('quotation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Quotation
 */

const makeSelectQuotation = () => createSelector(
  selectQuotationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectQuotation;
export {
  selectQuotationDomain,
};
