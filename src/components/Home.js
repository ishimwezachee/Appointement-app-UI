import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <Link to="/items">Items</Link>
    <Link to="/reserve">Reserve</Link>

  </div>
);
export default Home;
