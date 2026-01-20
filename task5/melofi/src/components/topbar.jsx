

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaDownload, FaUserCircle } from "react-icons/fa";
import "./topbar.css";

const Topbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="topbar-container">
     
      <div className="topbar-left">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="topbar-right">
        <button className="download-btn">
          <FaDownload className="download-icon" />
          Download App
        </button>

        <div className="profile-circle">
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
