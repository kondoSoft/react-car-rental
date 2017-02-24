/*
 *
 * Reserve reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  SAVE_CLIENT,
  SAVE_CAR_RESERVE,
  SET_LOADING_TRUE_RESERVE,
} from './constants';

const initialState = fromJS({
  'response':{
  },
  'UI':{
    Loading: false,
  },
  'client':{
    "car":{},
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
    case SAVE_CAR_RESERVE:
      return state.setIn(['client','car'],action.data)
    case SET_LOADING_TRUE_RESERVE:
      return state.setIn(['UI','Loading'],true)
    default:
      return state;
  }
}

export default reserveReducer;
