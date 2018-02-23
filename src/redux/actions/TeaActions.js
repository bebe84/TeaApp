import { TEA_FETCH_SUCCESS } from './types';

const teasURL = 'http://xtea.azurewebsites.net/api/tea';

const fetchTeasSuccess = (dispatch, teas) => {
  dispatch({
    type: TEA_FETCH_SUCCESS,
    payload: teas,
  });
};

export const fetchTeas = () => dispatch =>
  fetch(teasURL)
    .then(response => response.json())
    .then(teas => fetchTeasSuccess(dispatch, teas));
