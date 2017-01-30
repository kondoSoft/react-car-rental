/*
 *
 * Prueba reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import cars from '../../data/cars'
const initialState = fromJS({
  cars:cars
});

function pruebaReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    default:
      return state;
  }
}

export default pruebaReducer;
