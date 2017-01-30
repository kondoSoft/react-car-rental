
import { fromJS } from 'immutable';
import quotationReducer from '../reducer';

describe('quotationReducer', () => {
  it('returns the initial state', () => {
    expect(quotationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
