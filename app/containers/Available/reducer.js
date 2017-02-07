import { fromJS } from 'immutable';
import {
  LOAD_CARS,
  SET_CHECKBOX,
  ADD_CAR_CHECKED
} from './constants';

const initialState = fromJS({
  'car':{},

});

function availableReducer(state = initialState, action){
  switch (action.type) {
    case LOAD_CARS:
      return state
    case SET_CHECKBOX:
      var boolean = state.toJS().car.Checkbox
      return state.setIn(['car','Checkbox'], !boolean)
    case ADD_CAR_CHECKED:
      return state.setIn(['car', action.id], action.state)

    default:
      return state

  }
}
export default availableReducer;
