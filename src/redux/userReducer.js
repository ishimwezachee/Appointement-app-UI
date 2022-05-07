import axios from 'axios';
// create Actions
const FETCH_USERS = 'FETCH_USERS';

const initialState = [];

// create action creators methods

export const getUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

// get Items from API

export const getUsersFromApi = () => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:3001/logged_in',
    });
    console.log(data, 'data');
    if (data.logged_in) {
      dispatch({ type: FETCH_USERS, payload: data });
    }
  } catch (error) {
    console.error(error);
  }
  // dispatch(getUsers(response));
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
