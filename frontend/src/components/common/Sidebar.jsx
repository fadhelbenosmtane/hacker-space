import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import dashboardIcon from "../../assets/dashboard-icon.png";
import eventsIcon from "../../assets/events-icon.png";
import mentorsIcon from "../../assets/mentors-icon.png";
import rankingIcon from "../../assets/ranking-icon.png";
import notificationsIcon from "../../assets/notifications-icon.png";
import logoutIcon from "../../assets/logout-icon.png"; // Import the logout icon
import SideDecoration from './SideDecoration'; // Import the SideDecoration component


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navigation">
          <li>
            <img className="icon" src={dashboardIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </li>
          <li>
            <img className="icon" src={eventsIcon} alt="My Events" />
            <span>My Events</span>
          </li>
          <li>
            <img className="icon" src={mentorsIcon} alt="Ask Mentors" />
            <span>Ask Mentors</span>
          </li>
          <li>
            <img className="icon" src={rankingIcon} alt="Ranking" />
            <span>Ranking</span>
          </li>
          <li>
            <img className="icon" src={notificationsIcon} alt="Notifications" />
            <span>Notifications</span>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <img className="icon" src={logoutIcon} alt="Logout" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <SideDecoration />
    </>
  );
};

export default Sidebar;
