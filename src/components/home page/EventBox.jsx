import React from "react";
import "./eventBox.css";

const EventBox = ({ event, getEventStateColor }) => {
  return (
    <div className="event-box">
      <div className="event-info">
        <div className="event-name">{event.name}</div>
        <div className="event-type">{event.type}</div>
        <div className="event-date">{event.date}</div>
      </div>
      <div className="event-state" style={{ backgroundColor: getEventStateColor(event.state) }}>
        {event.state}
      </div>
      <div className="event-details">
        <div className="motivational-text">{event.motivationalText}</div>
      </div>
      <div className="details-link">
        <a href={event.detailsLink}>See details</a>
      </div>
    </div>
  );
};

export default EventBox;
