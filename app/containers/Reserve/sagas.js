
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { makeSelectClient, makeSelectLoadClient } from './selectors'
import { SET_CAR_RESERVE } from './constants'
import request from 'utils/request'

// Individual exports for testing
export function* getAPIReserve(){

  const client = yield select(makeSelectClient())
  const requestURL = `http://187.217.208.8:8000/reserve/`
  console.log(client);

 //  try {
 //    const getReserve = yield call(request, requestURL, {
 //      method:'POST',
 //      headers:{
 //        'Content-Type':'application/json'
 //      },
 //      body:JSON.stringify({
 //        "vendor":client.car.Vendor,
 //        "pickUPLocation":client.car.PickUpLocation_Code,
 //        "returnLocation":client.car.ReturnLocation_Code,
 //        "pickUPDateTime":client.car.PickUp_Date,
 //        "returnDateTime":client.car.Return_Date,
 //        "name":client.name,
 //        "lastName":client.lastName,
 //        "email":client.email,
 //        "address":client.address,
 //        "cityName":"Villahermosa",
 //        "CP":client.CP,
 //        "CountryName":"MX",
 //        "ID":client.car.ID
 //      })
 //    },)
 //  console.log(getReserve);
 //
 //
 //
 // }catch(err){
 //   console.log(err);
 // }

}
// All sagas to be loaded
export function* setReserveData(){
  const watcher = yield takeLatest(SET_CAR_RESERVE, getAPIReserve)
}

export default [
  setReserveData,
];
