import play from "../assets/play.png";
import next from "../assets/next.png";
import previous from "../assets/prev.png";
import more from "../assets/more.png";
import like from "../assets/like.png";
import shuffle from "../assets/shuffle.png";
import "./bottombar.css";
import { Link } from "react-router-dom";


export default function Bottombar() {
  return (
    <div className="bottombar-container">

      
      <div className="Image"></div>

      
      <div className="Song">Song Name</div>
      <div className="Artist">Artist</div>

      
      <button className="prev">
        <img src={previous} alt="previous" />
      </button>

      
      <Link to="/player" className="menu-link">
      <button className="play">
        <img src={play} alt="like" />
        
      </button>
      </Link>

      

      
      <button className="next">
        <img src={next} alt="next" />
      </button>

      
      <div className="Slider"></div>

     
      <div className="details">
        00:00 / 00:00
        </div>

      
      <button className="Like">
        <img src={like} alt="like" />
      </button>

      
      <button className="details shuffle-btn">
        <img src={shuffle} alt="shuffle" />
      </button>

      
      <button className="details more-btn">
        <img src={more} alt="more" />
      </button>

    </div>
  );
}

