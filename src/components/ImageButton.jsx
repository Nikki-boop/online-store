import React from 'react';
import './ImageButton.css'; // Import CSS for styling

const ImageButton = ({ src, alt, onClick }) => {
  return (
    <div className="image-button" onClick={onClick}>
      <img src={src} alt={alt} className="image-button-img" />
    </div>
  );
};

export default ImageButton;