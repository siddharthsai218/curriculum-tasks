


import './likedsongs.css';
import headphone from "../assets/headphones.svg";
import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Bottombar from "../components/bottombar";
import dots from "../assets/more.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePlayer } from "../components/PlayerContext";

function PlaylistDetails() {
  const { playlistId } = useParams();
  const [songs, setSongs] = useState([]);
  const { playSong } = usePlayer();


  useEffect(() => {
    fetch(`http://127.0.0.1:5000/playlists/${playlistId}/songs`)
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(err => console.error(err));
  }, [playlistId]);


  const removeSong = async (songId) => {
    try {
      await fetch(
        `http://127.0.0.1:5000/playlists/${playlistId}/remove`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ song_id: songId }),
        }
      );

     
      setSongs(prev => prev.filter(song => song.id !== songId));
    } catch (err) {
      console.error("Failed to remove song", err);
    }
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
          <div className="mysongs-container">

            <div className="album-box">
              <img src={headphone} alt="album" />
            </div>

            <div className="song-section">
              <h1>Playlist Songs</h1>

              {songs.length === 0 && <p>No songs yet</p>}

              {songs.map(song => (
                <div className="song-item" key={song.id}>
                  <button onClick={() => playSong(song)}>
                    {song.title}
                  </button>

                  <button
                    onClick={() => removeSong(song.id)}
                    style={{ background: "none", border: "none" }}
                  >
                    <img src={dots} className="menu-icon" alt="remove" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="Bottombar">
        <Bottombar />
      </div>
    </div>
  );
}

export default PlaylistDetails;
