import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import Item from './item';
import { getUsersFromApi } from '../../redux/userReducer';

const Users = () => {
  const dispatch = useDispatch();
  // const id = useParams();
  // console.log(id, 'Useparms ID');
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

      {/* {(Users[0] || []).map((item) => (
        <Item
          id={item.id}
          key={item.id}
          title={item.title}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))} */}
    </div>
  );
};

export default Users;
