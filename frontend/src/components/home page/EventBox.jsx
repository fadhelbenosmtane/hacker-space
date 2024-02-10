import React, { useState } from "react";
import "./eventBox.css";

const EventBox = ({ event, getEventStateColor }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleSeeMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="event-box">
        <div className="event-info">
          <div className="event-name">{event.name}</div>
          <div className="event-type">{event.type}</div>
          <div className="event-date">{event.date}</div>
        </div>
        <div
          className="event-state"
          style={{ backgroundColor: getEventStateColor(event.state) }}
        >
          {event.state}
        </div>
        <div className="event-details">
          <div className="motivational-text">{event.motivationalText}</div>
          {/* Additional Details */}
          {showDetails && (
            <div className="event-additional-info">
              <div className="themes-challenges">Themes/Challenges:</div>
              <div className="challenge-buttons">
                {event.challengeButtons.map((button, index) => (
                  <button key={index}>{button}</button>
                ))}
              </div>
              <div className="hacker-guide">
                <a href={event.hackerGuideLink}>Hacker Guide</a>
                (Click to download)
              </div>
              <div className="submission-format">
                {" "}
                <span>Submission format:</span> {event.submissionFormat}
              </div>
              <div className="prizes">
                <div>
                  {" "}
                  <span>1st place:</span> {event.prizes.first}
                </div>
                <div>
                  {" "}
                  <span>2nd place:</span> {event.prizes.second}
                </div>
                <div>
                  {" "}
                  <span>3rd place:</span> {event.prizes.third}
                </div>
              </div>
            </div>
          )}
          {/* End of Additional Details */}
        </div>
        {/* Display Time Left under Additional Info when "See details" is clicked */}
        {showDetails && (
          <div className="time">
            <span>Time Left:</span> {event.timeLeft}
          </div>
        )}
        {showDetails && (
          <div className="join-button">
            <button>Join Event</button>
          </div>
        )}

        <div className="details-link">
          <a href="#" onClick={handleSeeMoreClick}>
            {showDetails ? "Hide details" : "See details"}
          </a>
        </div>
      </div>
    </>
  );
};

export default EventBox;
