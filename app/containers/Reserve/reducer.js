/*
 *
 * Reserve reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  SAVE_CLIENT,
  SET_CAR,
} from './constants';

const initialState = fromJS({
	'cars': {
    "vendor":"",
    "ID":"",
  },
  'client':{
    "name":"",
    "lastName":"",
    "email":"",
    "address":"",
    "cityName":"",
    "CP":"",
    "CountryName":"MX",
  }
});

function reserveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case SAVE_CLIENT:
      return state.setIn(['client', action.data.id], action.data.value);
    case SET_CAR:
      console.log(action,'ss');
      // return state.setIn('cars',action.data)
    default:
      return state;
  }
}

export default reserveReducer;
