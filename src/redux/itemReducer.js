// create Actions
const FETH_ITEMS = 'FETH_ITEMS';

// store url in a variable
const url = 'http://localhost:3000/users/1/items';

const initialState = [];

// create action creators methods

export const getItems = (payload) => ({
  type: FETH_ITEMS,
  payload,
});

// get Items from API

export const getItemsFromApi = () => async (dispatch) => {
  const request = await fetch(url);
  const response = await request.json();
  dispatch(getItems(response));
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETH_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default itemReducer;
