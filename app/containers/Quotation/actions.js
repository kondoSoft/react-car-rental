/*
 *
 * Quotation actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_LOCATION,
  LOAD_CAR_RESERVE,
} from './constants';

export function loadAction() {
  return {
    type: LOAD_ACTION,
  };
}
export function loadLocation() {
  return {
    type: LOAD_LOCATION,
  };
}
export function loadCarReserve(){
  return{
    type: LOAD_CAR_RESERVE
  }
}
