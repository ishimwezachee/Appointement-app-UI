import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Nav = () => (
  <div className="nav">
    <nav className="same">
      <a href="#home" className="heading">
        <img src={logo} className="App-logo" alt="logo" width="220px" height="160px" />
      </a>
      <ul className="nav-link">
        <li><NavLink className="link" to="/items">DOCTORS</NavLink></li>
        <li><NavLink className="link" to="/reserve">MY RESERVATIONS</NavLink></li>
        <li><NavLink className="link" to="/myprofile">REVIEWS</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Nav;
