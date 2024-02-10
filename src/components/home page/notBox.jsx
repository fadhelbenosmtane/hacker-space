import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import './eventBox.css'; // Assuming you have a separate CSS file for event box styles

const NotBox = ({ notification }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationType, setNotificationType] = useState(notification.type);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (notificationType === 'Not read') {
        setNotificationType('Read');
      }
    openModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const borderColor = notification.type === 'Read' ? 'green' : 'red';
 
  return (
    <>
      <div className="event-box" style={{ border: `2px solid ${borderColor}` }} onClick={handleClick}>
        <div className="event-info">
          <div className="event-name">{notification.Head}</div>
          <div className="event-type">{notification.type}</div>
          <div className="event-type">{notification.Time}</div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
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
          >            What's new
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="pb-2 text-lg  font-bold"
          >            {notification.Detail}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default NotBox;
