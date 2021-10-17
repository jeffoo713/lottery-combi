import { numbersActionTypes } from './numbers.types';

export const drawNumbers = numbersToDraw => ({
  type: numbersActionTypes.DRAW_NUMBERS,
  payload: numbersToDraw,
});
