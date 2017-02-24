
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { makeSelectClient, makeSelectCar } from './selectors'
import { SET_LOADING_TRUE_RESERVE } from './constants'
import request from 'utils/request'

// Individual exports for testing
export function* getAPIReserve(){
  const client = yield select(makeSelectClient())
  const requestURL = `http://187.217.208.8:8000/reserve/`

  try {
    const getReserve = yield call(request, requestURL, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "vendor":client.car.vendor,
        "pickUPLocation":client.car.pickUPLocation,
        "returnLocation":client.car.returnLocation,
        "pickUPDateTime":client.car.pickUPDateTime,
        "returnDateTime":client.car.returnDateTime,
        "name":client.name,
        "lastName":client.lastName,
        "email":client.email,
        "address":client.address,
        "cityName":"Villahermosa",
        "CP":client.CP,
        "CountryName":"MX",
        "ID":client.car.ID
      })
    },)
  console.log(getReserve);
  //  if(getcar.source){
  //    yield put(loadingFalse())
  //    alert(getcar.source)
  //  }
   //
  //  else{
  //    yield put(carsLoaded(getcar))
  //    browserHistory.push('/available')
  //  }

 }catch(err){
   console.log(err);
 }

}

// All sagas to be loaded
export function* setReserveData(){
  const watcher = yield takeLatest(SET_LOADING_TRUE_RESERVE, getAPIReserve)
}

export default [
  setReserveData,
];
