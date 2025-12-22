import songcover from '../assets/songcover.png';
import './songcard.css'

export default function Songcard() {
    return (
       <div className="card-item">
        <button className="songcard-button">
            <img src={songcover} alt="songcover" className="songcover-icon" />
            Song Name
            </button>
        </div>
    )
}