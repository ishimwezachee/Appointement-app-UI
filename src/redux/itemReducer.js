// create Actions
const FETH_ITEMS = 'FETH_ITEMS';

const initialState = [];

// create action creators methods

export const getItems = (payload) => ({
  type: FETH_ITEMS,
  payload,
});

// get Items from API

export const getItemsFromApi = () => async (dispatch) => {
  const request = await fetch('http://localhost:3001/items');
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
