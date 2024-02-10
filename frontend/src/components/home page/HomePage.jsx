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
      challengeButtons: ["Button 1", "Button 2", "Button 3"],
      hackerGuideLink: "http://example.com/hacker_guide_gdg_hack",
      submissionFormat: "PDF",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "2 days 10 hours",
    },
    {
      name: "Project Showcase",
      type: "(Project)",
      date: "Fri, Apr 20th - Sun, Apr 22nd",
      state: "Finished",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1", "Button 2"],
      hackerGuideLink: "http://example.com/hacker_guide_project_showcase",
      submissionFormat: "Word Document",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "Finished",
    },
    {
      name: "Web Development Bootcamp",
      type: "(Bootcamp)",
      date: "Sat, May 5th - Sun, May 6th",
      state: "Finished",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1", "Button 2", "Button 3", "Button 4"],
      hackerGuideLink: "http://example.com/hacker_guide_web_dev_bootcamp",
      submissionFormat: "HTML",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "Finished",
    },
    {
      name: "Data Science Hackathon",
      type: "(Hackathon)",
      date: "Fri, Jun 15th - Sun, Jun 17th",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1", "Button 2", "Button 3"],
      hackerGuideLink: "http://example.com/hacker_guide_data_science_hackathon",
      submissionFormat: "Jupyter Notebook",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "4 days 6 hours",
    },
    {
      name: "Startup Bootcamp",
      type: "(Bootcamp)",
      date: "Sat, Jul 21st - Sun, Jul 22nd",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1", "Button 2", "Button 3"],
      hackerGuideLink: "http://example.com/hacker_guide_startup_bootcamp",
      submissionFormat: "Presentation",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "1 day 12 hours",
    },
    {
      name: "Innovation Project Competition",
      type: "(Project)",
      date: "Thu, Aug 30th - Sat, Sep 1st",
      state: "Ongoing",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1", "Button 2"],
      hackerGuideLink: "http://example.com/hacker_guide_innovation_project",
      submissionFormat: "PowerPoint",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "3 days 8 hours",
    },
    {
      name: "AI Workshop",
      type: "(Workshop)",
      date: "Sat, Oct 20th",
      state: "Upcoming",
      motivationalText: "Your motivational text here",
      detailsLink: "#",
      challengeButtons: ["Button 1"],
      hackerGuideLink: "http://example.com/hacker_guide_ai_workshop",
      submissionFormat: "None",
      prizes: { first: "Prize 1", second: "Prize 2", third: "Prize 3" },
      timeLeft: "10 days",
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