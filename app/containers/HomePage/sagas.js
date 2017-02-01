import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { SET_LOADING_TRUE } from './constants'
import { loadCars, carsLoaded, commentsLoaded } from './actions'

import request from 'utils/request'
import { makeSelectCars, makeSelectComments } from './selectors'


export function* getAPI(){
  const cars = yield select(makeSelectCars())
  const requestURL = `http://187.217.208.8:8000/consult/`
  try {
    const getcar = yield call(request, requestURL, {method:'POST'},)
    yield put(carsLoaded(getcar))
  }catch(err){
    console.log(err);
  }
}
export function* getAPIComments(){
  const comments = yield select(makeSelectComments())
  const requestURL = `https://jsonplaceholder.typicode.com/comments`
  try{
    const getcomment = yield call(request, requestURL)
    yield put(commentsLoaded(getcomment))
  }catch(err){
    console.log(err);
  }
}

// Individual exports for testing
export function* getCars() {
  const watcher = yield takeLatest(SET_LOADING_TRUE, getAPI)
  // See example in containers/HomePage/sagas.js
}

export function* getComments(){
  const watcher = yield takeLatest(SET_LOADING_TRUE, getAPIComments)
}

// All sagas to be loaded
export default [
  getCars,
  getComments,
];
