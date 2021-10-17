import { numbersActionTypes } from './numbers.types';

const INITIAL_STATE = {
  output: {
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
  },
};

const numbersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case numbersActionTypes.DRAW_NUMBERS:
      return {
        ...state,
        output: action.payload,
      };
    default:
      return state;
  }
};

export default numbersReducer;
