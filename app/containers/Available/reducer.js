import { fromJS } from 'immutable';
import {
  LOAD_CARS
} from './constants';

const initialState = fromJS({
  'UI':{
    Loading: false,
    Error: false
  },
});

function availableReducer(state = initialState, action){
  switch (action.type) {
    case LOAD_CARS:
      return state
    default:
      return state

  }
}
export default availableReducer;
