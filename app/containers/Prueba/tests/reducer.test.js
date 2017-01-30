
import { fromJS } from 'immutable';
import pruebaReducer from '../reducer';

describe('pruebaReducer', () => {
  it('returns the initial state', () => {
    expect(pruebaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
