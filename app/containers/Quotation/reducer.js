/*
 *
 * Quotation reducer
 *
 */

import { fromJS } from 'immutable';
import cars from '../../data/cars';
import {
  LOAD_ACTION,LOAD_LOCATION
} from './constants';

const initialState = fromJS({
	car: cars[0],
	location:cars[0].Compacto[0]
});

function quotationReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case LOAD_LOCATION:
      return state;
    default:
      return state;
  }
}

export default quotationReducer;
