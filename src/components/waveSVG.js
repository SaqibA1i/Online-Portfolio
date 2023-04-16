import { ReactElement as Wave } from "./images/wave4.svg";

const WaveSVG = ({ color }) => {
  return (
    <img
      className="top-wave"
      style={{ opacity: 1 }}
      srcSet="wave5.svg"
      alt="wave moving"
    />
  );
};

export default WaveSVG;
