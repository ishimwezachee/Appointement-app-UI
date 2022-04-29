import axios from 'axios';

const fetchLoginStatus = () => (dispatch) => {
  axios
    .get('http://localhost:3000/logged_in', { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in) {
        dispatch({
          type: 'LOGIN_USER',
          user: response.data.user.data.attributes,
        });
        dispatch({ type: 'CLEAR_ERROR' });
      }
    })
    .catch((error) => dispatch({ type: 'ADD_ERROR', error }));
};

export default fetchLoginStatus;
