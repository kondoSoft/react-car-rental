/*
 *
 * Reserve actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_CAR_RESERVE,
  SAVE_CLIENT,
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
export function setCar(){
  return {
    type:SET_CAR,
  }
}
