/*
 *
 * ReserveList reducer
 *
 */

import { fromJS } from 'immutable';
import Pre from '../../data/prereserve'
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  preReserve:Pre
});
function reserveListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default reserveListReducer;
