import { ADD_CITY, ADD_CITY_LOADING, ADD_CITY_ERROR } from './action';
const initialState = {
  loading: false,
  error: false,
  addcity: [],
};

const cityReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_CITY_LOADING:
      return { ...store, loading: true };
    case ADD_CITY:
      return {
        ...store,
        loading: false,
        error: false,
        addcity: [...action.payload],
      };

    case ADD_CITY_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        addcity: [],
      };
    default:
      store;
  }
};
export { cityReducer };