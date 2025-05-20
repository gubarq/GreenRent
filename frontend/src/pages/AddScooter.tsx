// frontend/src/pages/AddScooter.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface ScooterForm {
    Brand: string;
    Model: string;
    Price: number;
    Description: string;
    ImageUrl: string;
}

export const AddScooter: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<ScooterForm>();

    const onSubmit = async (data: ScooterForm) => {
        try {
            const payload = { ...data, IsRented: false };
            const res = await fetch("http://localhost:3000/scooter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                const text = await res.text();
                alert(`Error adding scooter: ${text || res.statusText}`);
                return;
            }
            setIsOpen(false);
            reset();
            navigate("/scooter");
        } catch (err: any) {
            console.error(err);
            alert("Error adding scooter: " + err.message);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Add Scooter</button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add Scooter</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Brand
                                <input
                                    {...register("Brand", { required: true })}
                                    placeholder="e.g. Xiaomi"
                                />
                            </label>

                            <label>
                                Model
                                <input
                                    {...register("Model", { required: true })}
                                    placeholder="e.g. M365"
                                />
                            </label>

                            <label>
                                Price (€ / day)
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("Price", {
                                        valueAsNumber: true,
                                        min: 0,
                                        required: true,
                                    })}
                                />
                            </label>

                            <label>
                                Description
                                <textarea
                                    {...register("Description", { required: true })}
                                    placeholder="A great city scooter..."
                                />
                            </label>

                            <label>
                                Image URL
                                <input
                                    {...register("ImageUrl", { required: true })}
                                    placeholder="https://example.com/img.jpg"
                                />
                            </label>

                            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                <button type="submit">Apply</button>
                                <button type="button" onClick={() => setIsOpen(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
