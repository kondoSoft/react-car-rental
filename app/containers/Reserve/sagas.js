
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { makeSelectClient, makeSelectLoadClient } from './selectors'
import { SET_CAR_RESERVE } from './constants'
import { browserHistory } from 'react-router'
import request from 'utils/request'

// Individual exports for testing
export function* getAPIReserve(){

  const client = yield select(makeSelectClient())
  const requestURL = `http://localhost:8000/save/prebooking`

  try {
    const getReserve = yield call(request, requestURL, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "pickUPDateTime":client.car.PickUp_Date,
        "returnDateTime":client.car.Return_Date,
        "pickUPLocation":client.car.PickUpLocation_Code,
        "returnLocation":client.car.ReturnLocation_Code,
        "CarName":client.car.Name,
        "Price":client.car.EstimatedTotalAmount,
        "Currency":client.car.CurrencyCode,
        "Vendor":client.car.Vendor,
        "CarJS":client.car,
        "name":client.name,
        "lastName":client.lastName,
        "address":client.address,
        "email":client.email,
        "CP":client.CP,
        "cityName":"Villahermosa",
      })
    },)
    if (getReserve.message == 'success') {
        alert('Prereserva guardada')
        browserHistory.push('/reserve-list')
    }
    else {
      alert('Problema al guardar la reserva, favor de comunicarse con el administrador')
    }



 }catch(err){
   console.log(err);
 }

}

export function* setReserveData(){
  const watcher = yield takeLatest(SET_CAR_RESERVE, getAPIReserve)
}

export default [
  setReserveData,
];
