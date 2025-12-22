
import { Link } from "react-router-dom";

import home from "../assets/home.png";
import playlist from "../assets/playlist.png";
import like from "../assets/like.png";
import artists from "../assets/artist.png";
import downloads from "../assets/download.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      <h2 className="sidebar-title">MeloFi</h2>

      <div className="menu">

        <div className="menu-item">
          <Link to="/dashboard" className="menu-link">
            <button className="menu-button">
              <img src={home} alt="home" className="home-icon" />
              Home
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/playlists" className="menu-link">
            <button className="menu-button">
              <img src={playlist} alt="playlist" className="playlist-icon" />
              Playlists
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/liked-songs" className="menu-link">
            <button className="menu-button">
              <img src={like} alt="like" className="like-icon" />
              Liked Songs
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/downloads" className="menu-link">
            <button className="menu-button">
              <img src={downloads} alt="downloads" className="download-icon" />
              Downloads
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/artists" className="menu-link">
            <button className="menu-button">
              <img src={artists} alt="artists" className="artist-icon" />
              Artists
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
