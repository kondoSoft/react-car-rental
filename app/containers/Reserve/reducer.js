/*
 *
 * Reserve reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  SAVE_CLIENT,
  SET_LOADING_TRUE_RESERVE,
  GET_RESERVE,
  SET_CAR,
} from './constants';

const initialState = fromJS({
  'response':{
  },
  'selectedCar':{
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
    case SET_LOADING_TRUE_RESERVE:
      return state.setIn(['UI','Loading'],true)
    case GET_RESERVE:
      return state.setIn(['response'],action.data)
    case SET_CAR:
      console.log('ejecutando set car');
      return state.setIn(['selectedCar'], action.data)
    default:
      return state;
  }
}

export default reserveReducer;
