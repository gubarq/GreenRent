import {Link} from "react-router-dom";

export const Home = () => {
    return (
    <>
    <div className="hero">


        <div className="hero-text">
            <h1>Ride Green</h1>
            <p>Choose sustainable mobility. Ride electric. Ride free.</p>
        </div>


    </div>
        <div className="vehicle-section">
            <h2>Discover our vehicles</h2>
            <h3>RENT NOW</h3>
            <div className="vehicle-cards">
                <Link to="/scooters" className="vehicle-card">
                    <img src="/scooter.png" alt="Electric Scooter" />
                    <p>Electric Scooter</p>
                </Link>
                <Link to="/bikes" className="vehicle-card">
                    <img src="/bike.png" alt="Electric Bike" />
                    <p>Electric Bike</p>
                </Link>
            </div>
        </div>
    </>

    )
}