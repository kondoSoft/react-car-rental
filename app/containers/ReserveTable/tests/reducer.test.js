
import { fromJS } from 'immutable';
import reserveTableReducer from '../reducer';

describe('reserveTableReducer', () => {
  it('returns the initial state', () => {
    expect(reserveTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
