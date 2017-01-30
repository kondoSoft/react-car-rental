/*
 *
 * Reserve reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
} from './constants';
import cars from '../../data/cars';

const initialState = fromJS({
	cars: cars[0].Compacto[0]
});

function reserveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    default:
      return state;
  }
}

export default reserveReducer;
