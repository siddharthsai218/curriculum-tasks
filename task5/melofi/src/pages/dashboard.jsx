import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Downloadapp from "../components/downloadapp";
import Profile from "../components/profile";
import Songcard from "../components/songcard";
import "./dashboard.css";
import Bottombar from "../components/bottombar";


function Dashboard() {
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
          <h2>Recommended</h2>

          <div className="card-row">
            <Songcard />
            <Songcard />
            <Songcard />
            <Songcard />
          </div>
        </div>

        <div className="section">
          <h2>Recently Played</h2>

          <div className="card-row">
            <Songcard />
            <Songcard />
            <Songcard />
            <Songcard />


            
          </div>

        
        
        </div>



      </div>

      <div className="bottombar">
        <Bottombar />
      </div>
    </div>
  );
}

export default Dashboard;