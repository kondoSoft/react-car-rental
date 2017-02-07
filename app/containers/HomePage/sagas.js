import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { SET_LOADING_TRUE, LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS } from './constants'
import { loadCars, carsLoaded, commentsSucces } from './actions'
import { browserHistory } from 'react-router'

import request from 'utils/request'
import { makeSelectCars, makeSelectComments } from './selectors'


export function* getAPI(){
  const cars = yield select(makeSelectCars())
  const requestURL = `http://187.217.208.8:8000/consult/`
  function currentLocation(){
    if(cars.returnLocation == undefined){
      cars.returnLocation = pickUPLocation
    }
  }


  // const requestURL = `http://jsonplaceholder.typicode.com/posts`
  try {
    yield currentLocation()

    const getcar = yield call(request, requestURL, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "pickUPLocation":"LAX",
        "returnLocation":"LAX",
        "pickUPDateTimte":"2017-02-17T10:00",
        "returnDateTimte":"2017-02-20T11:00",
        "SpecialEquip":0
      })
      // body:JSON.stringify({
      //   "pickUPLocation": cars.pickUPLocation,
      //   "returnLocation": cars.returnLocation,
      //   "pickUPDateTimte": cars.pickUpDate+cars.pickupTime,
      //   "returnDateTimte": cars.returnDate+cars.returnTime,
      //   "SpecialEquip":'0'
      // })
    },)
    yield put(carsLoaded(getcar))
    browserHistory.push('/available')
  }catch(err){
    console.log(err);
  }
}
export function* getAPIComments(){
  const requestURL = `https://jsonplaceholder.typicode.com/comments`
  try{
    const getcomment = yield call(request, requestURL)
    yield put(commentsSucces(getcomment))
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
  const watcher = yield takeLatest(LOAD_COMMENTS, getAPIComments)
}

// All sagas to be loaded
export default [
  getCars,
  getComments,
];
