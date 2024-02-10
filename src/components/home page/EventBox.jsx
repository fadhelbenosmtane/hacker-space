import React, { useState } from "react";
import "./eventBox.css";
import { Modal, Box, Typography } from "@mui/material";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventBox = ({ event, getEventStateColor }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [openModal, setOpenModal] = useState(false); // State variable to control modal opening
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [submittedData, setSubmittedData] = useState(null); // New state variable


  const handleSeeMoreClick = () => {
    setShowDetails(!showDetails);
  };

  const handleSubmit = () => {
    console.log("Event submitted with URL:", url);
    console.log("Video File:", videoFile);
    setOpenModal(false);
    setSubmitted(true);
    toast.success("Successfully submitted!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setSubmittedData({
        name: event.name,
        state: event.state,
      });
  };
  
  const handleOpenModal = () => {
        setOpenModal(true);
      };
 
    
      const handleCloseModal = () => {
        setOpenModal(false);
      };
    
      const handleUrlChange = (event) => {
        setUrl(event.target.value);
      };
      const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
      };
    


  return (
    <>
      <div className="event-box">
      {submittedData ? (
        <>
        <div className="event-info">
                <div className="event-name">{submittedData.name}</div>
        </div>
        <div className="event-state">
              {submittedData.state}
        </div>
        </>
        ) : (
        <>
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
        </>
    )}
    {!submittedData && (
        <div className="event-details">
          <div className="motivational-text">{event.motivationalText}</div>
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
        </div>
)}     
        {!submittedData && (
          <div className="time">
            <span>Time Left:</span> {event.timeLeft}
          </div>
        )}
        {!submittedData && (
            <div className="join-button">
            <button onClick={handleOpenModal}>Submit</button>
          </div>
          )}

          <div className="details-link">
          <a href="#" onClick={handleSeeMoreClick}>
            {showDetails ? "Hide details" : "See details"}
          </a>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-transparent rounded-lg shadow-lg flex flex-col justify-center items-center p-9 backdrop-blur-md">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="pb-2 text-lg text-yellow-500 font-bold"
          >
            Submit your work
          </Typography>
          <div className="mb-4 w-full flex items-center">
            <div className="text-md px-2 font-inter">
              Link to GitHub repo
            </div>
            <input
              type="text"
              placeholder="https://github.com/username/repo"
              value={url}
              onChange={handleUrlChange}
              className="flex px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-full flex items-center">
                      <div className="text-md px-2 font-inter">
                        Presentation Video{" "}
                      </div>
                      <input
                        type="file"
                        placeholder=""
                        onChange={handleFileChange}
                        className="flex px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
            </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-200"
          >
            SEND
          </button>
        </Box>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default EventBox;