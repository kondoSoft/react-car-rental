/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';


import {
  SET_LOADING_TRUE,
  LOAD_CARS_SUCCESS,
  LOAD_COMMENTS_SECCESS,
  SUBMIT_SEARCH,
} from './constants';

const initialState = fromJS({
  'comments':[],
  'cars': [],
  'UI':{
    Loading: false,
    Error: false
  },
  'values': {}
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return state.setIn(['UI','Loading'], true)
    case LOAD_CARS_SUCCESS:
      return state.setIn(['UI','Loading'], false).set('cars', action.cars)
    case LOAD_COMMENTS_SECCESS:
      return state.setIn(['UI','Loading'], false).set('comments', action.comments)
    case SUBMIT_SEARCH:
      return state.values
      console.log(state);
    default:
      return state;
  }
}

export default homePageReducer;
