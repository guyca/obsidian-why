import qr from '../assets/obsidianQR.png';
import arrow from '../assets/arrow.svg';

export const LearnMore = () => {
  return (
    <div className="learnMoreContainer">
      <img src={qr} />
      <div className="arrowAndText">
        <>Learn More!</>
        <img src={arrow}></img>
      </div>
    </div>
  );
};
