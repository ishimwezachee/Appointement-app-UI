import axios from 'axios';

const loginUser = (data, handleSuccess) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/login',
      { user: data },
      { withCredentials: true },
    )
    .then((response) => {
      if (response.data.status === 401) {
        throw new Error(response.data.error);
      }
      dispatch({ type: 'LOGIN_USER', user: response.data.user.data.attributes });
      dispatch({ type: 'CLEAR_ERROR' });
      handleSuccess();
    })
    .catch((response) => dispatch({ type: 'ADD_ERROR', error: response.message }));
};

export default loginUser;
