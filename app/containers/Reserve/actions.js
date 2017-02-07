/*
 *
 * Reserve actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_CAR_RESERVE,
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
