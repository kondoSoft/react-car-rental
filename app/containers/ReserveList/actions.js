/*
 *
 * ReserveList actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_LIST,
  SET_RESERVE_LIST,
  APPROVE_RESERVE,
  CANCEL_RESERVE,
  AUTHORIZATION_RESERVE,
  DELETE_RESERVE_DB,
  PRINT_VOUCHER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadReserveList(){
  return {
    type: LOAD_LIST,
  }
}

export function setReserveList(data){
  return {
    type: SET_RESERVE_LIST,
    data
  }
}

export function approveReserve(data){
  return {
    type:APPROVE_RESERVE,
    data
  }
}

export function cancelReserve(data){
  return {
    type:CANCEL_RESERVE,
    data
  }
}

export function authorizationReserve(data){
  return {
    type:AUTHORIZATION_RESERVE,
    data
  }
}

export function deleteReserve(data){
  return {
    type:DELETE_RESERVE_DB,
    data
  }
}

export function printReserve(data){
  return {
    type: PRINT_VOUCHER,
    data
  }
}
