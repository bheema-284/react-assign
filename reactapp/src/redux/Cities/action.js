export const ADD_CITY_LOADING = 'ADD_CITY_LOADING';
export const ADD_CITY = 'ADD_CITY';
export const ADD_CITY_ERROR = 'ADD_CITY_ERROR';

export const getCityLoading = () => ({
  type: ADD_CITY_LOADING,
});

export const getCity = (payload) => ({
  type: ADD_CITY,
  payload,
});

export const getCityError = () => ({
  type: ADD_CITY_ERROR,
});

export const getCityData = () => (dispatch) => {
  dispatch(getCityLoading());
  fetch(`http://localhost:8080/addcity`)
    .then((res) => res.json())
    .then((res) => dispatch(getCity(res)))
    .catch((err) => dispatch(getCityError()));
};
