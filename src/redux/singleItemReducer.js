// create Actions
// import { useParams } from 'react-router-dom';

const FETH_ITEM = 'FETCH_ITEM';

// store url in a variable
const initialState = [];

// create action creators methods

export const getItem = (payload) => ({
  type: FETH_ITEM,
  payload,
});

// get Items from API

export const getItemFromApi = () => async (dispatch) => {
//   const id = useParams();
  const url = 'http://localhost:3001/items/2';
  const request = await fetch(url);
  const response = await request.json();
  dispatch(getItem(response));
//   console.log(id, 'this is id');
};

const singleitemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETH_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default singleitemReducer;
