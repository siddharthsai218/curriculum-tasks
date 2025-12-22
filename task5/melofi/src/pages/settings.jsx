import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Playcard from "../components/playcard";
import Bottombar from "../components/bottombar";
import "./settings.css";


function Settings() {
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


    <div className="settings-panel">
      <div className="avatar">
        <img src="../assets/profile.png" alt="profile"/>
      </div>

      <h2 className="username">Siddharth</h2>

      <button className="edit-btn">Edit Profile</button>

      <div className="toggle-row">
        <span>Light / Dark</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <input type="password" placeholder="Enter Current Password" />
      <input type="password" placeholder="Enter New Password" />
      <input type="password" placeholder="Confirm New Password" />

      <button className="change-btn">Change Password</button>
      <button className="signout-btn">Sign Out</button>
    </div>

        
      </div>

      

      <div className="Bottombar">
        <Bottombar />
      </div>
    </div>
  );
}

export default Settings;