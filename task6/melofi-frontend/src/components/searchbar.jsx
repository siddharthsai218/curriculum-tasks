import "./searchbar.css";
import searchicon from "../assets/search.png";

export default function Searchbar() {
  return (
    <div className="search-box">
      <img src={searchicon} alt="search" className="search-icon" />
      <input type="text" className="search-input" placeholder="Search" />
    </div>
  );
}