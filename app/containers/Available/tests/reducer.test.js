
import { fromJS } from 'immutable';
import availableReducer from '../reducer';

describe('availableReducer', () => {
  it('returns the initial state', () => {
    expect(availableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
