import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import searchIcon from "../../assets/search-icon.png";
import "./homePage.css";
import EventBox from "./EventBox";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Sample event data array
  const events = [
    {
      name: "GDG Hack",
      type: "(Hackathon)",
      date: "Thu, Feb 2nd - Sat, Feb 4th",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
    {
      name: "Project Showcase",
      type: "(Project)",
      date: "Fri, Apr 20th - Sun, Apr 22nd",
      state: "Finished",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
    {
      name: "Web Development Bootcamp",
      type: "(Bootcamp)",
      date: "Sat, May 5th - Sun, May 6th",
      state: "Finished",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
    {
      name: "Data Science Hackathon",
      type: "(Hackathon)",
      date: "Fri, Jun 15th - Sun, Jun 17th",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
    {
      name: "Startup Bootcamp",
      type: "(Bootcamp)",
      date: "Sat, Jul 21st - Sun, Jul 22nd",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
    {
      name: "Innovation Project Competition",
      type: "(Project)",
      date: "Thu, Aug 30th - Sat, Sep 1st",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
    },
  ];
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    let filtered = events;

    // Apply category filter if a category is selected
    if (selectedCategory !== "All") {
      filtered = filtered.filter((event) =>
        event.type.includes(selectedCategory)
      );
    }

    // Apply search query filter
    filtered = filtered.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => event.type.includes(category));
      setFilteredEvents(filtered);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const getEventStateColor = (state) => {
    return state === "Ongoing" ? "#0D9D58" : "#EA4334";
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
            Welcome <span>Name</span>!{" "}
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search event"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleKeyPress}
            />
            <img
              src={searchIcon}
              alt="Search"
              className="search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>
        {searchQuery && (
          <div className="navigation-bar">
            <span>Results</span>
          </div>
        )}
        {!searchQuery && (
          <div className="navigation-bar">
            <span
              onClick={() => handleCategoryFilter("All")}
              className={selectedCategory === "All" ? "selected" : ""}
            >
              All
            </span>
            <span
              onClick={() => handleCategoryFilter("Hackathon")}
              className={selectedCategory === "Hackathon" ? "selected" : ""}
            >
              Hackathons
            </span>
            <span
              onClick={() => handleCategoryFilter("Ideathon")}
              className={selectedCategory === "Ideathon" ? "selected" : ""}
            >
              Ideathons
            </span>
            <span
              onClick={() => handleCategoryFilter("Project")}
              className={selectedCategory === "Project" ? "selected" : ""}
            >
              Projects
            </span>
            <span
              onClick={() => handleCategoryFilter("Bootcamp")}
              className={selectedCategory === "Bootcamp" ? "selected" : ""}
            >
              Bootcamps
            </span>
          </div>
        )}
        {/* Map over the filtered events array to generate event-box components */}
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventBox
              key={index}
              event={event}
              getEventStateColor={getEventStateColor}
            />
          ))
        ) : (
          <div className="no-events-message">
            {selectedCategory === "All" ? "There are no events available." : `There are no ${selectedCategory.toLowerCase()}s yet.`}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;