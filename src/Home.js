// client/src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </div>
);
export default Home;