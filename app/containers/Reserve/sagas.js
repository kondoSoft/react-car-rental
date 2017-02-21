
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request'
import { makeSelectClient, makeSelectCar } from './selectors'
import { getReserve } from './actions'
import { browserHistory } from 'react-router'
// Individual exports for testing

export function* getCarReserve() {
  const client = yield select(makeSelectClient())
  const car = yield select(makeSelectCar())
  const requestURL = `http://187.217.208.8:8000/reserve/`
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
        "name":client.name,
        "lastName":client.lastName,
        "email":client.email,
        "address":client.address,
        "cityName":client.cityName,
        "CP":client.CP,
        "CountryName":client.CountryName,
        "ID":car.ID,
      })
    },)
    yield put(getReserve(getreserve))
    // browserHistory.push('/')
    // if(getreserve.source){
    //   yield put(loadingFalse())
    //   alert(getcar.source)
    // }
    // else{
    //   yield put(carsLoaded(getcar))
    //   browserHistory.push('/available')
    // }
  }catch(err){
    console.log(err);
  }
}

export function* getReserveData(){
    const watcher = yield takeLatest( getCarReserve)
}
// All sagas to be loaded
export default [
  getCarReserve,
];
