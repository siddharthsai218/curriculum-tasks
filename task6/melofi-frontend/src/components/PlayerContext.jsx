import { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    if (!song?.audio) return;

    audioRef.current.src = song.audio;
    audioRef.current.play();

    setCurrentSong(song);
    setIsPlaying(true);

    // 🔥 Save history
    const userId = localStorage.getItem("user_id");

    if (userId) {
      fetch("http://127.0.0.1:5000/history/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          song_id: song.id,
        }),
      }).catch((err) =>
        console.error("Failed to save history", err)
      );
    }
  };

  const togglePlay = () => {
    if (!currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
