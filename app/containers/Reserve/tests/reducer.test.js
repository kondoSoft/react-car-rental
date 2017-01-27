
import { fromJS } from 'immutable';
import reserveReducer from '../reducer';

describe('reserveReducer', () => {
  it('returns the initial state', () => {
    expect(reserveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
