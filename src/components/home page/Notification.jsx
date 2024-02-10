import React, { useState, useEffect } from 'react';
import Sidebar from '../common/Sidebar';
import searchIcon from '../../assets/search-icon.png';
import './homePage.css';
import NotBox from './notBox'; // Corrected import name

const NotificationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNots, setFilteredNots] = useState([]);
  const [notifications, setNotifications] = useState([
    {
      Head: 'GDG Hack',
      Detail: 'I hope you are doing well click on it to see your score',
      type: 'Read',
      Time:"10 min ago"
    },
    {
      Head: 'GOOGLE Hack',
      Detail: "I hope you aren't doing well click on it to see your score",
      type: 'Not read',
      Time:"1 h ago"
    },
    {
      Head: 'SEC Hack',
      Detail: "I hope you are doing well don't click on it to see your score",
      type: 'Read',
      Time:'20 h ago',
    }
  ]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Filter notifications based on search query and selected type
    const filtered = notifications.filter((notification) =>
      notification.Head.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredNots(filtered);
  }, [searchQuery, notifications]);

  const handleNotificationFilter = (type) => {
    if (type === 'All') {
      setFilteredNots(notifications);
    } else {
      const filtered = notifications.filter((notification) =>
        notification.type.toLowerCase() === type.toLowerCase()
      );
      setFilteredNots(filtered);
    }
  };

  return (
    <>
      <div className="home-page">
        <Sidebar />
        {/* Add other content for the home page */}
      </div>
      <div className="main-content">
        <div className="top-bar">
          <div className="welcome-title">
            Welcome <span>Name</span>!{' '}
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search notification"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <img
              src={searchIcon}
              alt="Search"
              className="search-icon"
              onClick={() => handleNotificationFilter('All')}
            />
          </div>
        </div>
        <div className="navigation-bar">
          <span onClick={() => handleNotificationFilter('All')}>
            All
          </span>
          <span onClick={() => handleNotificationFilter('Read')}>
            Read
          </span>
          <span onClick={() => handleNotificationFilter('Not read')}>
            Not read
          </span>
        </div>
        {/* Map over the filtered notifications array to generate NotBox components */}
        {filteredNots.length > 0 ? (
          filteredNots.map((notification, index) => (
            <NotBox
              key={index}
              notification={notification}
            />
          ))
        ) : (
          <div className="no-events-message">
            No notifications found.
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationPage;
