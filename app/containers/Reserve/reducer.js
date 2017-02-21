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
  'car':{

  },
  'UI':{
    Loading: false,
  },
  'client':{
    "name":"",
    "lastName":"",
    "email":"",
    "address":"",
    "cityName":"Villahermosa",
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
      return state.setIn(['car'],action.data )
    default:
      return state;
  }
}

export default reserveReducer;
