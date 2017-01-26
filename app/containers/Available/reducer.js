import { fromJS } from 'inmutable';
import Cars from '../../data/cars'


const initialState = fromJS({
  cars: Cars
});

function availableReducer(state = initialState, action){
  switch (action.type) {
    case GET_CARS:
      return state
    default:
      return state
  }
}

export default availableReducer;
