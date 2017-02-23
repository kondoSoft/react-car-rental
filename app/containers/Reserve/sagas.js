
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request'
import { SET_LOADING_TRUE_RESERVE } from './constants'
import { makeSelectClient, makeSelectCarReserve } from './selectors'
import { getReserve, setCarReserve  } from './actions'
import { browserHistory } from 'react-router'
// Individual exports for testing

export function* getAPIReserve() {

  // const client = yield select(makeSelectClient())
  // console.log(client);
  const car = yield select(makeSelectCarReserve())
  console.log(car);
  const requestURL = 'http://187.217.208.8:8000/reserve/'

  try {
    // yield currentLocation()
    const getreserve = yield call(request, requestURL, {

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "vendor":car.Vendor,
        "pickUPLocation": car.pickUPLocation_Code,
        "returnLocation": car.returnLocation_Code,
        "pickUPDateTime": car.PickUp_Date,
        "returnDateTime": car.Return_Date,
        "name":car.name,
        "lastName":car.lastName,
        "email":car.email,
        "address":car.address,
        "cityName":car.cityName,
        "CP":car.CP,
        "CountryName":car.CountryName,
        "ID":car.ID,
      })
    },)
      yield put(getReserve(getreserve))
    // if(getreserve.source){
    //   yield put(loadingFalse())
    //   alert(getreserve.source)
    // }
    // else{
    //
    //   browserHistory.push('/')
    // }

  }catch(err){
    console.log(err);
  }
}

export function* getReserveData(){
    const watcher = yield takeLatest(SET_LOADING_TRUE_RESERVE, getAPIReserve)
}
// All sagas to be loaded
export default [
  getReserveData,
];
