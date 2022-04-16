import { ADD_COUNTRY, ADD_COUNTRY_LOADING, ADD_COUNTRY_ERROR } from './action';
const initialState = {
  loading: false,
  error: false,
  addcounty: [],
};

const countryReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY_LOADING:
      return { ...store, loading: true };
    case ADD_COUNTRY:
      return {
        ...store,
        loading: false,
        error: false,
        addCADD_COUNTRY: [...action.payload],
      };

    case ADD_COUNTRY_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        addcounty: [],
      };
    default:
      store;
  }
};
export { countryReducer };
