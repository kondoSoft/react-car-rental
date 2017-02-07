/*
 *
 * Available actions
 *
 */

import {
  LOAD_CARS,
  SET_CHECKBOX,
  ADD_CAR_CHECKED,
} from './constants';

export function loadCar() {
  return {
    type: LOAD_CARS,
  };
}
export function setCheckbox(){
  return {
    type: SET_CHECKBOX,

  }
}
export function addCarChecked(id, state){
  return{
    type: ADD_CAR_CHECKED,
    id,
    state,
  }
}
