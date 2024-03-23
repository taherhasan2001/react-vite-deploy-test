import React from 'react';
import CompassImage from './bzu.jpg'; // Adjust the path as necessary

function Compass() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href={CompassImage} width="140" height="140" />
    </svg>
  );
}

export default Compass;
