import React from 'react';
import '../assets/styles/NavigationBar.css';
import { NavLink } from 'react-router-dom';
// here props are recieved from App.js
function NavigationBar(props) {
  return (
    <header className="header-bar">
      <nav className="nav">
        <NavLink to="/" className="title">
          {/* the props passed from App.js it's title is shown here. */}
          {props.title}
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : 'home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-cards"
              // here isActive
              className={({ isActive }) => (isActive ? 'active' : 'my-cards')}
            >
              My Cards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spending-tracker"
              className={({ isActive }) =>
                isActive ? 'active' : 'spending-tracker'
              }
            >
              Spending Tracker
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/settings" className="Settings">
              Settings
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <select className="profile-dropdown">
        <option>profile</option>
        <option>log out</option>
      </select>
    </header>
  );
}

export default NavigationBar;
