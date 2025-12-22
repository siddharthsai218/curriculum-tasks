import './likedsongs.css'
import headphone from "../assets/headphones.svg";
import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Bottombar from "../components/bottombar";
import dots from "../assets/more.png";
import download from "../assets/download.png";


function Download() {
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
              <img src={download} alt="album" />
            </div>

            <div className="song-section">
              <h1>Downloads</h1>

              <div className="song-item">
                <button>Evolve</button>
                <img src={dots} className="menu-icon" alt="menu" />
              </div>

              <div className="song-item">
                <button>Sad</button>
                <img src={dots} className="menu-icon" alt="menu" />
              </div>

              <div className="song-item">
                <button>Evolve</button>
                <img src={dots} className="menu-icon" alt="menu" />
              </div>

              <div className="song-item">
                <button>Evolve</button>
                <img src={dots} className="menu-icon" alt="menu" />
              </div>

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


export default Download;
