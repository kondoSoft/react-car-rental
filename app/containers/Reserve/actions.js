/*
 *
 * Reserve actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_CAR_RESERVE,
  SAVE_CLIENT,
  GET_RESERVE,
  SET_LOADING_TRUE_RESERVE,
  SET_CAR,
} from './constants';

export function defaultAction() {
  return {
    type: LOAD_ACTION,
  };
}
export function loadCarReserve(){
  return{
    type: LOAD_CAR_RESERVE
  }
}
export function saveClient(data){
  return {
    type: SAVE_CLIENT,
    data
  }
}
export function getReserve(data){
  return{
    type: GET_RESERVE,
    data
  }
}
export function loadingTrueReserve(){
  return{
    type: SET_LOADING_TRUE_RESERVE,
  }
}
export function setCarReserve(data){
  return{
    type: SET_CAR,
    data
  }
}
