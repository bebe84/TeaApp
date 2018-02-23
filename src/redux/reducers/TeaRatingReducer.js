import { TEA_SET_RATING } from '../actions/types';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEA_SET_RATING:
      return { ...state, [action.payload.id]: action.payload.rating };

    default:
      return state;
  }
};
