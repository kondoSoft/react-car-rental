import { fromJS } from 'immutable';
import {
  LOAD_CARS,
  ADD_CAR_CHECKED
} from './constants';

const initialState = fromJS({
  'car':{},

});

function availableReducer(state = initialState, action){
  switch (action.type) {
    case LOAD_CARS:
      return state
    case ADD_CAR_CHECKED:
      return state.setIn(['car', action.id], action.state)
    default:
      return state

  }
}
export default availableReducer;
