import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { SET_LOADING_TRUE } from './constants'
import { loadCars, carsLoaded, commentsLoaded } from './actions'
import { browserHistory } from 'react-router'

import request from 'utils/request'
import { makeSelectCars, makeSelectComments } from './selectors'


export function* getAPI(){
  const cars = yield select(makeSelectCars())
  const requestURL = `http://187.217.208.8:8000/consult/`
  // const requestURL = `http://jsonplaceholder.typicode.com/posts`
  try {
    const getcar = yield call(request, requestURL, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "pickUPLocation": cars.pickUPLocation,
        "returnLocation": cars.returnLocation,
        "pickUPDateTimte": cars.pickUpDate+cars.pickupTime,
        "returnDateTimte": cars.returnDate+cars.returnTime,
        "SpecialEquip":'0'
      })
    },)
    yield put(carsLoaded(getcar))
    browserHistory.push('/available')
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
