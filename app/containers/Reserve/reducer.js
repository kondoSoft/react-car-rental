/*
 *
 * Reserve reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
  SET_CAR_RESERVE,
  SAVE_CLIENT,
  // SAVE_CAR_RESERVE,
  // SET_LOADING_TRUE_RESERVE,
} from './constants';

const initialState = fromJS({
  'UI':{
    Loading: false,
  },
  'request':{
    "name":"",
    "lastName":"",
    "email":"",
    "address":"",
    "cityName":"Villahermosa",
    "CP":"",
    "CountryName":"MX",
  },
  'response':{
  }
});

function reserveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case SET_CAR_RESERVE:
      return state.setIn(['request','car'],action.data)
    case SAVE_CLIENT:
      var countData=Object.keys(action.data).length
      if (countData > 1) {
        return state.setIn(['request', action.data.id], action.data.value)
      }else {
        var key=Object.keys(action.data)
        return state.setIn(['request',key[0]],action.data[key])
      }

    default:
      return state;
  }
}

export default reserveReducer;
