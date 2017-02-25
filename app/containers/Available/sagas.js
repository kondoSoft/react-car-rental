import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import {selectLocationState} from 'containers/App/selectors'
import {LOAD_CARS} from './constants'
import { selectHomePageState } from '../HomePage/selectors'
import { loadCar } from './actions'

import request from 'utils/request'


function* getState(){
  const cars = yield select(selectHomePageState())
}

export function* getCars() {
  const watcher = yield takeLatest(LOAD_CARS, getState)
}

// All sagas to be loaded

export default [
  getCars,
];
