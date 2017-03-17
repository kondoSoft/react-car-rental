/*
 *
 * ReserveList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_LIST,
  SET_RESERVE_LIST,
  CANCEL_RESERVE,
  AUTHORIZATION_RESERVE,
  DELETE_RESERVE_DB,
  PRINT_VOUCHER,
} from './constants';

const initialState = fromJS({
  preReserve:[],
  request:{
    'cancelID':0,
    'AprovedID':0,
    'DeleteID':0
  }
});
function reserveListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_LIST:
      return state;
    case SET_RESERVE_LIST:
      return state.setIn(['preReserve'],action.data.PreBookings)
    case CANCEL_RESERVE:
      return state.setIn(['request','cancelID'],action.data)
    case AUTHORIZATION_RESERVE:
      return state.setIn(['request','AprovedID'],action.data)
    case DELETE_RESERVE_DB:
      return state.setIn(['request','DeleteID'],action.data)
    case PRINT_VOUCHER:
      return state.setIn(['request','AprovedID'],action.data)
    default:
      return state;
  }
}

export default reserveListReducer;
