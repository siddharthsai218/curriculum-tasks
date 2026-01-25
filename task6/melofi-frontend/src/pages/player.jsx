import "./player.css";
import shape from "../assets/SHAPE.png";

export default function Player() {
  return (
    <div className="player-container">
      <div className="player-content">

        <div className="album-art">
          <img
            src={shape}
            alt="album"
          />
        </div>

        <div className="empty-box">
            <h2 className="st">Song Title</h2>
            <h3 className="an">Artist Name</h3>
            
        </div>

      </div>

      <div className="progress-container">
        <div className="progress-bar">
            
        </div>
        <p>00:00/00:00</p>
      </div>

      <div className="controls">
        <div className="left-controls">
          <img src="/assets/add_playlist.png" alt="playlist" />
          <img src="/assets/like.png" alt="like" />
        </div>

        <div className="center-controls">
          <img src="/assets/prev.png" alt="prev" />
          <img className="play-btn" src="/assets/play.png" alt="play" />
          <img src="/assets/next.png" alt="next" />
        </div>
      </div>


      <button className="lyrics-btn">LYRICS</button>
    </div>
  );
}
