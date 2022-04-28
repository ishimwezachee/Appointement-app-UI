import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="navigations">
    <ul className="NavList">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Doctors">Doctors</NavLink>
      <NavLink to="/reservations">Reservations</NavLink>
    </ul>
  </div>
);

export default Navigation;
