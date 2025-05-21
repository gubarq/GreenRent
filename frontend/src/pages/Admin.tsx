import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Admin = () => {

    const [bikes, setBikes] = useState<any[]>([]);
    const [scooters, setScooters] = useState<any[]>([]);
    const navigate = useNavigate();

    const getBikes = async () => {
        try {
            const result = await fetch('http://localhost:3000/bike');
            const data = await result.json();
            setBikes(data);
        } catch (error) {
            console.error('Failed to get bikes', error);
        }
    }
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
        getBikes();
        getScooters();
    }, []);
    const handleDeleteBikes = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this bike?")) return;

        try {
            const response = await fetch(`http://localhost:3000/bike/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                getBikes();
            } else {
                console.error("Failed to delete bike");
            }
        } catch (error) {
            console.error("Error while deleting bike:", error);
        }
    };
    const handleDeleteScooters = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this scooter?")) return;

        try {
            const response = await fetch(`http://localhost:3000/scooter/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                getScooters();
            } else {
                console.error("Failed to delete scooter");
            }
        } catch (error) {
            console.error("Error while deleting scooter:", error);
        }
    };

    return (
        <>
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
                            <button className="rent-btn" type={"submit"} onClick={() => handleDeleteBikes(bike.ID)}>Delete</button>
                            <button className="rent-btn" type={"submit"} onClick={() => navigate(`/admin/${bike.ID}/editbike`)}>Edit</button>
                        </div>
                    </div>
                ))}
        </div>
    <div className="grid">
        {scooters
            .map((scooter, index) => (
                <div className="card" key={index}>
                    <img src={scooter.ImageUrl} alt={'scooter image'}/>
                    <div className="details">
                        <h3>{scooter.Brand} {scooter.Model}</h3>
                        <p className="extra">from {scooter.Price} €</p>
                        <p className="extra">Description: {scooter.Description}</p>
                        <p className={`availability ${scooter.IsRented ? "unavailable" : "available"}`}>
                            Availability: {scooter.IsRented ? "Rented" : "Free"}</p>
                        <button className="rent-btn" type={"submit"} onClick={() => handleDeleteScooters(scooter.ID)}>Delete</button>
                        <button className="rent-btn" type={"submit"} onClick={() => navigate(`/admin/${scooter.ID}/editscooter`)}>Edit</button>
                    </div>
                </div>
            ))}
    </div>
            </>
    )
}