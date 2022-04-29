// create Actions
const FETCH_RESERVES = 'FETH_RESERVES';

// store url in a variable
const url = 'http://localhost:3000/users/1/items/1/reservations';

const initialState = [];

// create action creators methods

export const getReserves = (payload) => ({
  type: FETCH_RESERVES,
  payload,
});

// get data from API

export const getReserveFromApi = () => async (dispatch) => {
  const request = await fetch(url);
  const response = await request.json();
  dispatch(getReserves(response));
};

const reserveReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reserveReducer;
