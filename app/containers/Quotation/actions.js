/*
 *
 * Quotation actions
 *
 */

import {
  LOAD_ACTION,
  LOAD_LOCATION,
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
