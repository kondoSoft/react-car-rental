import { createSelector } from 'reselect';


const selectReserveListDomain = () => (state) => state.get('reserveList');


const makeSelectReserveList = () => createSelector(
  selectReserveListDomain(),
  (substate) => substate.toJS()
);

const makeSelectRequest = ()=> createSelector(
  selectReserveListDomain(),
  (state) => state.get('request').toJS(),
)
export default makeSelectReserveList;

export {
  selectReserveListDomain,
  makeSelectRequest,
};
