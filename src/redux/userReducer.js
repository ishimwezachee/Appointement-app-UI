// create Actions
const FETCH_USERS = 'FETCH_USERS';

// store url in a variable
// const url = 'http://localhost:3001/users/1/items';

const initialState = [];

// create action creators methods

export const getUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

// get Items from API

export const getUsersFromApi = () => async (dispatch) => {
  const request = await fetch('http://localhost:3001/users');
  const response = await request.json();
  dispatch(getUsers(response));
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
