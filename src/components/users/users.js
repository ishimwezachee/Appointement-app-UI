import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersFromApi } from '../../redux/userReducer';

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromApi());
  }, []);
  const users = useSelector((state) => state.usersReducer);
  console.log((users || []), 'I am displaying .................');

  const singUser = (users[0] || []).map((user) => (
    <Link key={user.id} to={`/users/${user.id}`}>Users</Link>
  ));

  return (
    <div>
      <h1>uSERS</h1>

      <p>{ singUser }</p>
    </div>
  );
};

export default Users;
