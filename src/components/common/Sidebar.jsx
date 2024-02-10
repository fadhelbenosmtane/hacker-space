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
import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navigation">
          <li>
          <Link to="/">
            <img className="icon" src={dashboardIcon} alt="Homepage" />
            <span>Dashboard</span>
            </Link>
          </li>
          <li>
          <Link to="/my-event">
            <img className="icon" src={eventsIcon} alt="My Events" />
            <span>My Events</span>
            </Link>
         </li>
          <li>
          <Link to="/ask-mentors"> 
            <img className="icon" src={mentorsIcon} alt="Ask Mentors" />
            <span>Ask Mentors</span>
            </Link>
          </li>
          <li>
          <Link to="/ranking">
            <img className="icon" src={rankingIcon} alt="Ranking" />
            <span>Ranking</span>
            </Link>
          </li>
          <li>
          <Link to="/notification">
            <img className="icon" src={notificationsIcon} alt="Notifications" />
            <span>Notifications</span>
              </Link>

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
