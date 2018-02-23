import { TEA_FETCH_SUCCESS } from '../actions/types';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEA_FETCH_SUCCESS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};
