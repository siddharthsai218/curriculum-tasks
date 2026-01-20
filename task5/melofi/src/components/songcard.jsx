

 import './songcard.css';
 import { usePlayer } from "../components/PlayerContext.jsx";



function Songcard({ song }) {
  if (!song) return null; // 🔒 CRITICAL SAFETY LINE

  const { playSong } = usePlayer();

  return (
    <div className="card">
      <button onClick={() => playSong(song)}>
        <img src={song.cover} alt={song.title} />
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </button>
    </div>
  );
}

export default Songcard;

