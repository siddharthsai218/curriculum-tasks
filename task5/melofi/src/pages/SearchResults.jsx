import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("user_id");


  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/songs/search?q=${query}`
        );
        const data = await res.json();
        setSongs(data);
      } catch (err) {
        console.error("Search failed", err);
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);

 
  useEffect(() => {
    if (!userId) return;

    const fetchPlaylists = async () => {
      const res = await fetch(
        `http://127.0.0.1:5000/users/${userId}/playlists`
      );
      const data = await res.json();
      setPlaylists(data);
    };

    fetchPlaylists();
  }, [userId]);


  const addToPlaylist = async (playlistId, songId) => {
    await fetch(
      `http://127.0.0.1:5000/playlists/${playlistId}/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ song_id: songId }),
      }
    );

    alert("Song added to playlist ");
  };

  return (
    <div className="search-page">
      <h2 className="search-title">
        Search results for <span>"{query}"</span>
      </h2>

      {loading && <p className="status-text">Searching...</p>}

      {!loading && songs.length === 0 && (
        <p className="status-text">No results found 😕</p>
      )}

      <div className="songs-grid">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
            <img
              src={song.cover}
              alt={song.title}
              className="song-cover"
            />

            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
            </div>

            
            <div className="playlist-actions">
              {playlists.map((pl) => (
                <button
                  key={pl.id}
                  className="add-btn"
                  onClick={() => addToPlaylist(pl.id, song.id)}
                >
                  ➕ {pl.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
