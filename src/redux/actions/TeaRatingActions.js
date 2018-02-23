import { TEA_SET_RATING } from './types';

export const setTeaRating = ({ id, rating }) => ({
  type: TEA_SET_RATING,
  payload: { id, rating },
});
