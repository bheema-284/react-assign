export const ADD_COUNTRY_LOADING = 'ADD_COUNTRY_LOADING';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const ADD_COUNTRY_ERROR = 'ADD_COUNTRY_ERROR';

export const getCountryLoading = () => ({
  type: ADD_COUNTRY_LOADING,
});

export const getCountry = (payload) => ({
  type: ADD_COUNTRY,
  payload,
});

export const getCountryError = () => ({
  type: ADD_COUNTRY_ERROR,
});

export const getCountryData = () => (dispatch) => {
  dispatch(getCountryLoading());
  fetch(`http://localhost:8080/addcountry`)
    .then((res) => res.json())
    .then((res) => dispatch(getCountry(res)))
    .catch((err) => dispatch(getCountryError()));
};
