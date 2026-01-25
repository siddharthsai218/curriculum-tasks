import { useEffect, useState } from "react";
import { usePlayer } from "../components/PlayerContext.jsx";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import "./bottombar.css";

export default function Bottombar() {
  const { currentSong, isPlaying, togglePlay } = usePlayer();
  const [liked, setLiked] = useState(false);

  const userId = localStorage.getItem("user_id");


  useEffect(() => {
    setLiked(false);
  }, [currentSong?.id]);

  if (!currentSong) return null;

  const toggleLike = async () => {
    if (!userId) return;

    let endpoint;

    if (liked) {
      endpoint = "http://127.0.0.1:5000/liked-songs/remove";
    } else {
      endpoint = "http://127.0.0.1:5000/liked-songs/add";
    }

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          song_id: currentSong.id,
        }),
      });

     
      setLiked(!liked);
    } catch (err) {
      console.error("Failed to toggle like", err);
    }
  };

  return (
    <div className="bottombar-container">
      
      <div
        className="Image"
        style={{
          backgroundImage: `url(${currentSong.cover})`,
          backgroundSize: "cover",
        }}
      />

      
      <div>
        <div className="Song">{currentSong.title}</div>
        <div className="Artist">{currentSong.artist}</div>
      </div>

      
      <button className="prev">
        <FaStepBackward size={18} />
      </button>

      <button className="play" onClick={togglePlay}>
        {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
      </button>

      <button className="next">
        <FaStepForward size={18} />
      </button>

     
      <div className="Slider"></div>
      <div className="details">00:00 / 00:00</div>

      
      <button
        className="like-btn"
        onClick={toggleLike}
        style={{ background: "none", border: "none" }}
      >
        {liked ? (
          <FaHeart size={20} color="#1db954" />
        ) : (
          <FaRegHeart size={20} color="white" />
        )}
      </button>
    </div>
  );
}
