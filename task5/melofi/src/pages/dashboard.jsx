

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Songcard from "../components/songcard";
import Bottombar from "../components/bottombar";
import "./dashboard.css";

function Dashboard() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      
      <div className="sidebar-wrapper">
        <Navbar />
      </div>

      
      <div className="main-content">
        <header className="top-header">
          <Topbar />
        </header>

        <main className="content-section">
          <h2 className="section-title">Recommended</h2>

          <div className="card-row">
            {songs.map((song) => (
              <Songcard key={song.id} song={song} />
            ))}
          </div>
        </main>
      </div>

     
      <footer className="player-footer">
        <Bottombar />
      </footer>
    </div>
  );
}

export default Dashboard;
