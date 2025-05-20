import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const BikesOverview = () => {
    const navigate = useNavigate();
    const [bikes, setBikes] = useState<any[]>([]);



    const getBikes = async () => {
        try {
            const result = await fetch('http://localhost:3000/bike');
            const data = await result.json();
            setBikes(data);
        } catch (error) {
            console.error('Failed to get bikes', error);
        }
    }
    useEffect(() => {
        getBikes();
    }, []);

    const handleRent = async (id:number) => {
        try {

            await fetch(`http://localhost:3000/bike/${id}/rent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            getBikes();
            navigate("/bike");
        } catch (error) {
            console.error("Failed to rent bike:", error);
        }
    };

    const handleUnrent = async (id:number) => {
        try {

            await fetch(`http://localhost:3000/bike/${id}/unrent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            getBikes();
            navigate("/bike");
        } catch (error) {
            console.error("Failed to unrent bike:", error);
        }
    };
    return (
        <div className="grid">
            {bikes
                .map((bike, index) => (
                    <div className="card" key={index}>
                        <img src={bike.ImageUrl} alt={'bike image'}/>
                        <div className="details">
                            <h3>{bike.Brand} {bike.Model}</h3>
                            <p className="extra">from {bike.Price} €</p>
                            <p className="extra">Description: {bike.Description}</p>
                            <p className={`availability ${bike.IsRented ? "unavailable" : "available"}`}>
                                Availability: {bike.IsRented ? "Rented" : "Free"}</p>
                            {bike.IsRented === 0 && (
                                <button className="rent-btn" onClick={() => handleRent(bike.ID)}>Rent this bike</button>
                            )}
                            <br/>
                            {bike.IsRented === 1 && (
                                <button className="rent-btn" onClick={() => handleUnrent(bike.ID)}>Unrent this bike</button>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    )
}