

import { Link } from "react-router-dom";
import {
  FaHome,
  FaMusic,
  FaHeart,
  FaDownload,
  FaUser,
} from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="sidebar-title">MeloFi</h2>

      <div className="menu">
        <div className="menu-item">
          <Link to="/dashboard" className="menu-link">
            <button className="menu-button">
              <FaHome className="menu-icon" />
              Home
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/playlists" className="menu-link">
            <button className="menu-button">
              <FaMusic className="menu-icon" />
              Playlists
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/liked-songs" className="menu-link">
            <button className="menu-button">
              <FaHeart className="menu-icon" />
              Liked Songs
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/downloads" className="menu-link">
            <button className="menu-button">
              <FaDownload className="menu-icon" />
              Downloads
            </button>
          </Link>
        </div>

        <div className="menu-item">
          <Link to="/artists" className="menu-link">
            <button className="menu-button">
              <FaUser className="menu-icon" />
              Artists
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
