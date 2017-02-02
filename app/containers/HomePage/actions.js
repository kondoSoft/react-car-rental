/*
 *
 * HomePage actions
 *
 */

import {
  SET_LOADING_TRUE,
  LOAD_CARS_SUCCESS,
  LOAD_COMMENTS_SECCESS,
  SUBMIT_SEARCH,
} from './constants';

export function loadingTrue(){
  return {
    type: SET_LOADING_TRUE,
  }
}

export function carsLoaded(cars){
  return{
    type: LOAD_CARS_SUCCESS,
    cars,
  }
}
export function commentsLoaded(comments){
  return{
    type: LOAD_COMMENTS_SECCESS,
    comments,
  }
}
export function submitSearch(value){
  return{
    type: SUBMIT_SEARCH,
    value,
  }
}
