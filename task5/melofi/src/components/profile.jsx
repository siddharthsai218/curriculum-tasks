import './profile.css';
import profile from '../assets/profile.png';
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div className ='profile'>
        <Link to="/settings" className="menu-link">
            <button className="menu-button">
                <img src={profile} alt="profile" className="profile-icon" />
            </button>
        </Link>
        </div>
    )
}