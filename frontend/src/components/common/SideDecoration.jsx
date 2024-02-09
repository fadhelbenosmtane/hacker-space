import React from 'react';
import './sideDecoration.css';
import sideDecorationImage from "../../assets/side-decoration.png"; // Import the side decoration image

const SideDecoration = () => {
  return (
    <img src={sideDecorationImage} alt="Side Decoration" className="side-decoration" />
  );
};

export default SideDecoration;
