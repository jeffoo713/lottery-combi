import { combineReducers } from 'redux';

import numbersReducer from './numbers/numbers.reducer';

const rootReducer = combineReducers({
  numbers: numbersReducer,
});

export default rootReducer;
