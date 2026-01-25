


import './likedsongs.css';
import headphone from "../assets/headphones.svg";
import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Bottombar from "../components/bottombar";
import dots from "../assets/more.png";
import { useEffect, useState } from "react";
import { usePlayer } from "../components/PlayerContext";

function MySongs() {
  const [songs, setSongs] = useState([]);
  const { playSong } = usePlayer();

  const userId = localStorage.getItem("user_id");

  
  useEffect(() => {
    const fetchLikedSongs = async () => {
      try {
        
        const res = await fetch(
          `http://127.0.0.1:5000/users/${userId}/playlists`
        );
        const playlists = await res.json();

        
        const likedPlaylist = playlists.find(
          (p) => p.name === "Liked Songs"
        );

        if (!likedPlaylist) return;

        
        const songsRes = await fetch(
          `http://127.0.0.1:5000/playlists/${likedPlaylist.id}/songs`
        );
        const songsData = await songsRes.json();

        setSongs(songsData);
      } catch (err) {
        console.error("Failed to load liked songs", err);
      }
    };

    if (userId) fetchLikedSongs();
  }, [userId]);

 
  const removeFromLiked = async (songId) => {
    try {
      await fetch("http://127.0.0.1:5000/liked-songs/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          song_id: songId,
        }),
      });

   
      setSongs((prev) => prev.filter((s) => s.id !== songId));
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
              <h1>Liked Songs</h1>

              {songs.length === 0 && <p>No liked songs yet</p>}

              {songs.map((song) => (
                <div className="song-item" key={song.id}>
                  <button onClick={() => playSong(song)}>
                    {song.title}
                  </button>

                  <button
                    onClick={() => removeFromLiked(song.id)}
                    style={{ background: "none", border: "none" }}
                  >
                    <img
                      src={dots}
                      className="menu-icon"
                      alt="remove"
                    />
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

export default MySongs;
