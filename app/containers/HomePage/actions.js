/*
 *
 * HomePage actions
 *
 */

import {
  SET_LOADING_TRUE,
  LOAD_CARS_SUCCESS,
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  SAVE_LOCATION,
  SAVE_DATE,
  SET_LOADING_FALSE,
} from './constants';

export function loadingTrue(){
  return {
    type: SET_LOADING_TRUE,
  }
}

export function loadingFalse(){
    return {
      type:SET_LOADING_FALSE,
    }
}

export function carsLoaded(cars){
  return{
    type: LOAD_CARS_SUCCESS,
    cars,
  }
}
export function commentsLoaded(){
  return {
    type: LOAD_COMMENTS
  }
}
export function commentsSucces(comments){
  return{
    type: LOAD_COMMENTS_SUCCESS,
    comments,
  }
}
export function saveLocation(location){
  return{
    type: SAVE_LOCATION,
    location,
  }
}
export function saveDate(data, input){
  return{
    type: SAVE_DATE,
    data,
    input,
  }
}
