import CompassImage from './bzu.jpg'; // Adjust the path as necessary

function Compass() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href={CompassImage} width="60" height="60" />
    </svg>
  );
}

export default Compass;
