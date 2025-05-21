import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditBike = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [bike, setBike] = useState({
        Brand: "",
        Model: "",
        Price: 0,
        Description: "",
        ImageUrl: "",
    });

    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:3000/bike/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then((data) => {
                console.log("Loaded bike:", data);
                setBike(data[0]);
            })
            .catch((err) => {
                console.error("Failed to load bike:", err);
            });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBike((prev) => ({
            ...prev,
            [name]: name === "Price" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting data:", bike);
        fetch(`http://localhost:3000/admin/${id}/EditBike`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bike),
        })
            .then(() => navigate("/admin"))
            .catch((err) => console.error("Failed to update bike:", err));
    };

    return (
        <div>
            <h2>Edit Bike</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: 300 }}>
                <label>
                    Brand
                    <input name="Brand" value={bike.Brand} onChange={handleChange} />
                </label>
                <label>
                    Model
                    <input name="Model" value={bike.Model} onChange={handleChange} />
                </label>
                <label>
                    Price
                    <input name="Price" type="number" value={bike.Price} onChange={handleChange} />
                </label>
                <label>
                    Description
                    <textarea name="Description" value={bike.Description} onChange={handleChange} />
                </label>
                <label>
                    Image URL
                    <input name="ImageUrl" value={bike.ImageUrl} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditBike;
