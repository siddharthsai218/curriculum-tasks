import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Playcard from "../components/playcard";
import Bottombar from "../components/bottombar";
import "./playlist.css";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  
  useEffect(() => {
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/users/${userId}/playlists`)
      .then(res => res.json())
      .then(data => setPlaylists(data))
      .catch(err => console.error(err));
  }, [userId]);

 
  const createPlaylist = () => {
    const name = prompt("Enter playlist name");
    if (!name) return;

    fetch("http://127.0.0.1:5000/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        user_id: userId
      })
    })
      .then(res => res.json())
      .then(newPlaylist => {
        setPlaylists(prev => [...prev, newPlaylist]);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="dashboard">
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="main">
        <div className="topbar">
          <Searchbar />
          <div className="right-icons">
            <Downloadapp />
            <Profile />
          </div>
        </div>

        <div className="section">
          <h2>Playlists</h2>

          <div className="Add">
            <button className="download-btn" onClick={createPlaylist}>
              <span className="download-icon">➕</span>
              Create New Playlist
            </button>
          </div>

          <div className="card-row">
            {playlists.length === 0 && (
              <p style={{ color: "#aaa" }}>No playlists yet</p>
            )}

            {playlists.map(p => (
              <Playcard
                key={p.id}
                title={p.name}
                onClick={() => navigate(`/playlists/${p.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="Bottombar">
        <Bottombar />
      </div>
    </div>
  );
}

export default Playlist;
