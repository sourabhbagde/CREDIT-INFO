import React, { useState } from 'react';
import { SideBarData } from './SideBarData';
import { NavLink } from 'react-router';
import '../assets/styles/SideBar.css';
import MenuIcon from '@mui/icons-material/Menu';
const SideBar = () => {
  // const [listOfSidebarMenu, setListOfSidebarMenu] = useState(SideBarData);
  /*
   * creating a array of state variables and assigning true for isSidebarVisible.
   */
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    /*
     * the isSidebarVisible is set to not depending on the it's value.
     * this value is used to show the sidebar visiblity in return().
     */
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
      {/* sets the values of SideBarData as null. */}
      {/* <button className="sidebar-hide" onClick={() => setListOfSidebarMenu([])}> */}
      <MenuIcon
        className="sidebar-toggle"
        aria-label={isSidebarVisible ? 'Hide Menu' : 'Show Menu'}
        /*
         * On clicking or calling this toggleSlidder - the isSidebarVisible is reset to NOT current boolean everytime.
         */
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? 'Hide Menu' : 'Show Menu'}
      </MenuIcon>

      {/*
       * allowing sidebar-list to be visible
       */}
      {isSidebarVisible && (
        <ul className="sidebar-ul">
          {/*
           * the data array for sidebar is mapped to it's value and key
           */}
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className="sidebar-list"
                // id={window.location.pathname === val.link ? 'active' : ''}
              >
                {/* onClick={() => {
                window.location.pathname = val.link;
              }}
             */}
                {/* here respective icon/title if clicked/navigated -> it's link is rendered */}
                {/* <NavLink to={val.link} className="sidebar-link"> */}
                <NavLink
                  to={val.link}
                  className={({ isActive }) =>
                    isActive ? 'active' : 'sidebar-link'
                  }
                >
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
      )}
    </div>
  );
};

export default SideBar;
