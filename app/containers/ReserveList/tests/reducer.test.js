
import { fromJS } from 'immutable';
import reserveListReducer from '../reducer';

describe('reserveListReducer', () => {
  it('returns the initial state', () => {
    expect(reserveListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
