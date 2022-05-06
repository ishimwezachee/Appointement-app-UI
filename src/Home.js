// client/src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';

const Home = () => (
  <div className="home">
    <div className="my-logo">
      <img src={logo} className="App-logo" alt="logo" width="220px" height="160px" />
    </div>
    <div className="enter">
      <div className="presentation">
        <span className="span">We Provide All Health Care Solution</span>
        <h2 className="h2-pro">Protect Your Health And Take Care To Of Your Health</h2>
      </div>
      <div className="b-btn">
        <button type="button" className="join-log">
          <Link id="li" to="/login">Log In</Link>
        </button>
        <button type="button" className="join-sign">
          <Link id="li" to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  </div>
);
export default Home;
