const initialState = {
  isLoggedIn: false,
  id: null,
  name: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        isLoggedIn: true,
        id: action.user.id,
        name: action.user.name,
      };
    default:
      return state;
  }
};

export const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return [action.error];
    case 'CLEAR_ERROR':
      return [];
    default:
      return state;
  }
};
