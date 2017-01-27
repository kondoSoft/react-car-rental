/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import comments from '../../data/clients'
import {
  LOAD_ACTION,
} from './constants';

const initialState = fromJS({
  'comments':comments
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
