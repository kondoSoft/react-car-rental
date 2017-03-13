import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request'
import { LOAD_LIST,CANCEL_RESERVE, AUTHORIZATION_RESERVE, DELETE_RESERVE_DB } from './constants'
import { makeSelectRequest } from './selectors'
import {loadReserveList, setReserveList} from './actions'

// Individual exports for testing
export function* getAPIReserveList() {
  const requestURL = `http://localhost:8000/list/prebooking/`
  try{
    const getreserveList = yield call(request, requestURL)
    yield put(setReserveList(getreserveList))
  }catch(err){
    console.log(err);
  }
}

export function* getAPICancelReserve(){

  const requestURL = `http://localhost:8000/cancel/booking/`
  const getData = yield select(makeSelectRequest())
   try {
     const getCancel = yield call(request, requestURL, {
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         "Id":getData.cancelID,
       })
     },)
     if (getCancel.CancelStatus) {
       yield put(loadReserveList())
     }
  }catch(err){
    console.log(err);
  }
}

export function* getAPIAuthorizationReserve(){

  const requestURL = `http://localhost:8000/autorization/booking`
  const getData = yield select(makeSelectRequest())

  console.log(getData.getAuthorization);
   try {
     const getAuthorization = yield call(request, requestURL, {
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         "Id":getData.AprovedID,
       })
     },)
     if (getAuthorization.status == '200') {
         yield put(loadReserveList())
     }
  }catch(err){
    console.log(err);
  }
}

export function* getAPIDeleteReserve(){

  const requestURL = `http://localhost:8000/delete/registry/booking/`
  const getData = yield select(makeSelectRequest())
   try {
     const getDelete = yield call(request, requestURL, {
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         "Id":getData.DeleteID,
       })
     },)
     console.log(getDelete);
     if (getDelete.status=='200') {
       yield put(loadReserveList())
     }
  }catch(err){
    console.log(err);
  }
}

export function* getList(){
  const watcher = yield takeLatest(LOAD_LIST, getAPIReserveList)
}
export function* getCancelReserve(){
  const watcher = yield takeLatest(CANCEL_RESERVE, getAPICancelReserve)
}
export function* getAuthorizationReserve(){
  const watcher = yield takeLatest(AUTHORIZATION_RESERVE, getAPIAuthorizationReserve)
}
export function* getDeleteReserve(){
  const watcher = yield takeLatest(DELETE_RESERVE_DB, getAPIDeleteReserve)
}
// All sagas to be loaded
export default [
  getList,
  getCancelReserve,
  getAuthorizationReserve,
  getDeleteReserve,
];
