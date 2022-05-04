const BOOK_ITEM = 'BOOK_ITEM';
const REMOVE_BOOKED_ITEM = 'REMOVE_BOOKED_ITEM';
// import {} from ;

const initialState = [];

export const bookItem = (payload) => ({
  type: BOOK_ITEM,
  payload: { ...payload },
});

export const removeBookedItem = (payload) => ({
  type: REMOVE_BOOKED_ITEM,
  payload,
});

// Add reserve to API
export const addBookToApi = (payload, userId, itemId) => async (dispatch) => {
  await fetch(`http://localhost:3001/users/${userId}/items/${itemId}/reservations`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then((result) => {
    if (result.status === 201) {
      dispatch(bookItem(payload));
    }
  });
};

// Remove BookedItem from API
export const removeBookFromApi = (itemId, payload) => async (dispatch) => {
  await fetch(`http://localhost:3001/users/1/items/${itemId}/reservations/${payload}`, {
    method: 'DELETE',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch(removeBookedItem(payload));
  // dispatch(bookItem());
};

const bookItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ITEM:
      return [...state, action.payload];
    case REMOVE_BOOKED_ITEM:
      return state.filter((bookedItem) => bookedItem.item_id !== action.payload);
    default:
      return state;
  }
};

export default bookItemReducer;
