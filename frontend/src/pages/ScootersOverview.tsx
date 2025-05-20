import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const ScootersOverview = () => {
    const navigate = useNavigate();
    const [scooters, setScooters] = useState<any[]>([]);



    const getScooters = async () => {
        try {
            const result = await fetch('http://localhost:3000/scooter');
            const data = await result.json();
            setScooters(data);
        } catch (error) {
            console.error('Failed to get bikes', error);
        }
    }
    useEffect(() => {
        getScooters();
    }, []);

    const handleRent = async (id:number) => {
        try {
            await fetch(`http://localhost:3000/scooter/${id}/rent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            getScooters();
            navigate("/scooter");
        } catch (error) {
            console.error("Failed to rent scooter:", error);
        }
    };

    const handleUnrent = async (id:number) => {
        try {
            await fetch(`http://localhost:3000/scooter/${id}/unrent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            getScooters();
            navigate("/scooter");
        } catch (error) {
            console.error("Failed to unrent scooter:", error);
        }
    };
    return (
        <div className="grid">
            {scooters
                .map((scooter, index) => (
                    <div className="card" key={index}>
                        <img src={scooter.ImageUrl} alt={'scooter image'}/>
                        <div className="details">
                            <h3>{scooter.Brand} {scooter.Model}</h3>
                            <p className="extra">from {scooter.Price} €</p>
                            <p className="extra">Description: {scooter.Description}</p>
                            <p className="extra">Availability: {scooter.IsRented ? "Rented" : "Free"}</p>
                            {scooter.IsRented === 0 && (
                                <button className="rent-btn" onClick={() =>handleRent(scooter.ID)}>Rent this scooter</button>
                            )}
                            <br/>
                            {scooter.IsRented === 1 && (
                                <button className="rent-btn" onClick={() =>handleUnrent(scooter.ID)}>Unrent this scooter</button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    )
}