import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { SET_LOADING_TRUE, LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, SET_LOADING_FALSE } from './constants'
import { loadCars, carsLoaded, commentsSucces, loadingFalse } from './actions'
import { browserHistory } from 'react-router'

import request from 'utils/request'
import { makeSelectCars, makeSelectComments } from './selectors'


export function* getAPI(){
  const cars = yield select(makeSelectCars())
  const requestURL = `http://187.217.208.8:8000/consult/`
  if (cars.pickUPLocation==''){
    yield put(loadingFalse())
    var spanError = document.getElementById('spanPickUp')
    spanError.classList.remove("out")
    spanError.classList.add("validation")
  }
  else if (cars.pickUpDate==''){
    yield put(loadingFalse())
    alert('Seleccione Fecha de Recogida')
  }
  else if (cars.pickupTime==''){
    yield put(loadingFalse())
    alert('Seleccione Hora de Recogida')
  }
  else if (cars.returnDate==''){
    yield put(loadingFalse())
    alert('Seleccione Fecha de Entrega')
  }
  else if (cars.returnTime==''){
    yield put(loadingFalse())
    alert('Seleccione Hora de Entrega')
  }
  else {
    // const requestURL = `http://jsonplaceholder.typicode.com/posts`
    try {
      // yield currentLocation()
      const getcar = yield call(request, requestURL, {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        // body:JSON.stringify({
        //   "pickUPLocation":"LAX",
        //   "returnLocation":"LAX",
        //   "pickUPDateTime":"2017-03-19T13:30-06:00",
        //   "returnDateTime":"2017-03-28T13:30-06:00",
        //   "SpecialEquip":"7"
        // })
        body:JSON.stringify({
          "pickUPLocation": cars.pickUPLocation,
          "returnLocation": cars.returnLocation,
          "pickUPDateTime": cars.pickUpDate+cars.pickupTime,
          "returnDateTime": cars.returnDate+cars.returnTime,
          "SpecialEquip":"0"
        })
      },)
      if(getcar.source){
        yield put(loadingFalse())
        alert(getcar.source)
      }
      else{
        yield put(carsLoaded(getcar))
        browserHistory.push('/available')
      }
    }catch(err){
      console.log(err);
    }
  }

}
export function* getAPIComments(){
  const requestURL = `http://187.217.208.8:8000/commentsApi/`
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
