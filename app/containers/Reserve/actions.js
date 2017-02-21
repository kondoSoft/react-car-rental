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
  GET_RESERVE,
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
export function setCar(data){
  return {
    type:SET_CAR,
    data
  }
}
export function getReserve(data){
  return{
    type:GET_RESERVE,
    data
  }
}
