import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import searchIcon from "../../assets/search-icon.png";
import "./homePage.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    // Sample event data array
    const events = [
      {
        name: "GDG Hack",
        type: "(Hackathon)",
        date: "Thu, Feb 2nd - Sat, Feb 4th",
        state: "Ongoing",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Tech Ideathon",
        type: "(Ideathon)",
        date: "Mon, Mar 12th - Wed, Mar 14th",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Project Showcase",
        type: "(Project)",
        date: "Fri, Apr 20th - Sun, Apr 22nd",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Web Development Bootcamp",
        type: "(Bootcamp)",
        date: "Sat, May 5th - Sun, May 6th",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Data Science Hackathon",
        type: "(Hackathon)",
        date: "Fri, Jun 15th - Sun, Jun 17th",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Startup Bootcamp",
        type: "(Bootcamp)",
        date: "Sat, Jul 21st - Sun, Jul 22nd",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      },
      {
        name: "Innovation Project Competition",
        type: "(Project)",
        date: "Thu, Aug 30th - Sat, Sep 1st",
        state: "Upcoming",
        motivationalText: "Your motivational text here",
        detailsLink: "#"
      }
    ];
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filtered = events.filter(event => event.name.toLowerCase().includes(searchQuery.toLowerCase()));
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
      const filtered = events.filter(event => event.type.includes(category));
      setFilteredEvents(filtered);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
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
            <img src={searchIcon} alt="Search" className="search-icon" onClick={handleSearch} />
          </div>
        </div>
        {searchQuery && (
          <div className="navigation-bar">
            <span>Search Results</span>
          </div>
        )}
        {!searchQuery && (
          <div className="navigation-bar">
            <span onClick={() => handleCategoryFilter("All")} className={selectedCategory === "All" ? "selected" : ""}>All</span>
            <span onClick={() => handleCategoryFilter("Hackathon")} className={selectedCategory === "Hackathon" ? "selected" : ""}>Hackathons</span>
            <span onClick={() => handleCategoryFilter("Ideathon")} className={selectedCategory === "Ideathon" ? "selected" : ""}>Ideathons</span>
            <span onClick={() => handleCategoryFilter("Project")} className={selectedCategory === "Project" ? "selected" : ""}>Projects</span>
            <span onClick={() => handleCategoryFilter("Bootcamp")} className={selectedCategory === "Bootcamp" ? "selected" : ""}>Bootcamps</span>
          </div>
        )}
        {/* Map over the filtered events array to generate event-box components */}
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-box">
            <div className="event-top">
              <div className="event-info">
                <div className="event-name">{event.name}</div>
                <div className="event-type">{event.type}</div>
                <div className="event-date">{event.date}</div>
              </div>
              <div className="event-state">{event.state}</div>
            </div>
            <div className="event-bottom">
              <div className="motivational-text">{event.motivationalText}</div>
              <div>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpen(); }}>See details</a>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
            </div>
          </div>
          
        ))}
      </div>
    </>
  );
};

export default HomePage;
