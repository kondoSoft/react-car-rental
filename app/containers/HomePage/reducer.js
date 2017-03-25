/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';


import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  LOAD_CARS_SUCCESS,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  SAVE_LOCATION,
  SAVE_DATE,
  RESET_STATE,

} from './constants';

const initialState = fromJS({
  'comments':[],
  'cars': [],
  'UI':{
    Loading: false,
    Error: false
  },
  'values': {
    "pickUPLocation":"",
    "returnLocation":"",
    "pickUpDate":"",
    "pickupTime":"",
    "returnDate":"",
    "returnTime":"",
    "SpecialEquip":'0',
  },
});

function homePageReducer(state = initialState, action)
  {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return state.setIn(['UI','Loading'], true)
    case SET_LOADING_FALSE:
      return state.setIn(['UI','Loading'],false)
    case LOAD_CARS_SUCCESS:
      return state.setIn(['UI','Loading'], false).set('cars', action.cars)
    case LOAD_COMMENTS:
      return state
    case LOAD_COMMENTS_SUCCESS:
      return state.set('comments', action.comments)
    case SAVE_DATE:
      return state.setIn(['values', action.data[1]], action.data[0])
    case SAVE_LOCATION:
      return state.setIn(['values', action.location[1]], action.location[0])
    case RESET_STATE:
      return state.setIn(['values',action.data],"")
    default:
      return state;
  }
}

export default homePageReducer;
