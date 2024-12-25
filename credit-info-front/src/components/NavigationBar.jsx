import React from 'react';
import '../assets/styles/NavigationBar.css';
// here props are recieved from App.js
function NavigationBar(props) {
  return (
    <header className="header-bar">
      <nav className="nav">
        <a href="/" className="title">
          {/* the props passed from App.js it's title is shown here. */}
          {props.title}
        </a>
        <ul className="nav-list">
          <li>
            <a href="/" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="/my-cards" className="my-cards">
              My Cards
            </a>
          </li>
          <li>
            <a href="/search-bar" className="search-bar">
              Search Bar
            </a>
          </li>
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
