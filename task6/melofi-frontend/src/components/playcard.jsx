import headset from "../assets/headphones.svg";
import "./playcard.css";

export default function Playcard({ title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <button className="playcard-button">
        <img
          src={headset}
          alt="playlist cover"
          className="songcover-icon"
        />
        <span>{title}</span>
      </button>
    </div>
  );
}
