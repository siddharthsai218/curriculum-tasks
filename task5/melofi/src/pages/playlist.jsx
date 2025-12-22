import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Playcard from "../components/playcard";
import Bottombar from "../components/bottombar";
import "./playlist.css";

function Playlist() {
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

          <div className="card-row">
            <Playcard title="My Songs" />
            <Playcard title="Liked Songs" />
            <Playcard title="Downloads" />
            
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






