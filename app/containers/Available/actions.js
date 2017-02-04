/*
 *
 * Available actions
 *
 */

import {
  LOAD_CARS,
} from './constants';

export function loadCar() {
  return {
    type: LOAD_CARS,
  };
}
