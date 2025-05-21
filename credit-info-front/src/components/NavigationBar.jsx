import React from 'react';
import '../assets/styles/NavigationBar.css';
import { NavLink } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import {
  PROFILE,
  LOGOUT,
  HOME,
  MYCARDS,
  SPENDINGTRACKER,
} from '../utils/constants';

// here props are recieved from App.js
function NavigationBar(props) {
  return (
    <header className="header-bar">
      {/* <MenuIcon className="menu-icon" /> */}
      <nav className="nav">
        <NavLink to="/" className="title">
          {/* the props passed from App.js it's title is shown here. */}
          {props.title}
          {/*  the side bar data are shown in side bar also the contents are same
          in the NavigationBar.jsx - sync with NavigationBar and SideBar */}
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'home')}
            >
              {HOME}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-cards"
              // here isActive
              className={({ isActive }) => (isActive ? 'active' : 'my-cards')}
            >
              {MYCARDS}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spending-tracker"
              className={({ isActive }) =>
                isActive ? 'active' : 'spending-tracker'
              }
            >
              {SPENDINGTRACKER}
            </NavLink>
          </li>
        </ul>
      </nav>
      <select className="profile-dropdown">
        <option>{PROFILE}</option>
        <option>{LOGOUT}</option>
      </select>
    </header>
  );
}

export default NavigationBar;
