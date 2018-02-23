import { combineReducers } from 'redux';
import TeaListReducer from './TeaListReducer';
import TeaRatingReducer from './TeaRatingReducer';

export default combineReducers({
  teas: TeaListReducer,
  ratings: TeaRatingReducer,
});
