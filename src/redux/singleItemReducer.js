// create Actions
const FETCH_SINGLEITEM = 'FETCH_SINGLEITEM';

// store url in a variable
const initialState = [];

// create action creators methods

export const getItem = (payload) => ({
  type: FETCH_SINGLEITEM,
  payload,
});

// get Items from API

export const getItemFromApi = (id) => async (dispatch) => {
  const url = `http://localhost:3001/items/${id}`;
  const request = await fetch(url);
  const response = await request.json();
  dispatch(getItem(response));
//   console.log(id, 'this is id');
};

const singleitemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLEITEM:
      // return [...state, action.payload];
      return action.payload;
    default:
      return state;
  }
};

export default singleitemReducer;
