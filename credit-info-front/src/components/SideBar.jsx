import React from 'react';
import { SideBarData } from './SideBarData';
import { NavLink } from 'react-router';
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-ul">
        {/* the data array for sidebar is mapped to it's value and key */}
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebar-list"
              id={window.location.pathname === val.link ? 'active' : ''}
            >
              {/* onClick={() => {
                window.location.pathname = val.link;
              }}
             */}
              {/* here respective icon/title if clicked/navigated -> it's link is rendered */}
              <NavLink to={val.link} className="sidebar-link">
                {' '}
                {/* allowing them into same div tag for side-side show.*/}
                {/* Changes - took back to different div and used flex in css.*/}
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
