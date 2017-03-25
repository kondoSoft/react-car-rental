/*
 *
 * Quotation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  LOAD_LOCATION,
  SELECTED_CARS,
} from './constants';

const initialState = fromJS({
	selected:[],
	location:{}
});

function quotationReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      // console.log('primero');
      // console.log(state._root.entries[0][1]);
      // return state.filter(_root.entries => );
      return state.set('selected',[])
    case LOAD_LOCATION:
      return state;
    case SELECTED_CARS:
    // console.log('segundo');
    // console.log(state._root.entries[0]);
      return state.set('selected',action.cars)
    default:
      return state;
  }
}

export default quotationReducer;
