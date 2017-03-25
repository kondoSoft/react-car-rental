/*
 *
 * Quotation actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_LOCATION,
  SELECTED_CARS
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

export function selectedCars(cars){
  return{
    type:SELECTED_CARS,
    cars,
  }
}
