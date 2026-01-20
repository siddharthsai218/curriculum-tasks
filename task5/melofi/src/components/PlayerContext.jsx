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
