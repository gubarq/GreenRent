import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditScooter = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [scooter, setScooter] = useState({
        Brand: "",
        Model: "",
        Price: 0,
        Description: "",
        ImageUrl: "",
    });

    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:3000/scooter/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then((data) => {
                console.log("Loaded scooter:", data);
                setScooter(data[0]);
            })
            .catch((err) => {
                console.error("Failed to load scooter:", err);
            });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setScooter((prev) => ({
            ...prev,
            [name]: name === "Price" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting data:", scooter);
        fetch(`http://localhost:3000/admin/${id}/EditScooter`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(scooter),
        })
            .then(() => navigate("/admin"))
            .catch((err) => console.error("Failed to update scooter:", err));
    };

    return (
        <div>
            <h2>Edit Scooter</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: 300 }}>
                <label>
                    Brand
                    <input name="Brand" value={scooter.Brand} onChange={handleChange} />
                </label>
                <label>
                    Model
                    <input name="Model" value={scooter.Model} onChange={handleChange} />
                </label>
                <label>
                    Price
                    <input name="Price" type="number" value={scooter.Price} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <textarea name="Description" value={scooter.Description} onChange={handleChange} />
                </label>
                <label>
                    Image URL
                    <input name="ImageUrl" value={scooter.ImageUrl} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditScooter;
