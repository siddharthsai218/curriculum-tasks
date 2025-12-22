import headset from '../assets/headphones.svg';
import './songcard.css'

export default function Playcard() {
    return (
       <div className="card">
        <button className="playcard-button">
            <img src={headset} alt="songcover" className="songcover-icon" />
            My Songs
            </button>
        </div>
    )
}