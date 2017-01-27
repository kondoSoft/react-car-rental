import { fromJS } from 'immutable';
import {
  LOAD_ACTION,
} from './constants';
import cars from '../../data/cars';
const initialState = fromJS({
  cars: cars[0]
});

function availableReducer(state = initialState, action){
  switch (action.type) {
    case LOAD_ACTION:
      return state
    default:
      return state
  }
}
export default availableReducer;
