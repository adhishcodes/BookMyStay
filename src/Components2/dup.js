import React, { useState } from 'react';
 // Import your CSS file for styling

const Hovex = () => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <button onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        CONTACT
      </button>
      {isHovered && (
        <div className="message-box">
          Hello
        </div>
      )}
    </div>
  );
};
export default Hovex;