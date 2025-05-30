// frontend/src/pages/Add.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ItemForm = {
    Brand: string;
    Model: string;
    Price: number;
    Description: string;
    ImageUrl: string;
};

export const Add: React.FC = () => {
    const [openModal, setOpenModal] = useState<"scooter" | "bike" | null>(null);
    const navigate = useNavigate();

    // shared form setup
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<ItemForm>();

    const submitItem = async (type: "scooter" | "bike", data: ItemForm) => {
        try {
            const res = await fetch(`http://localhost:3000/${type}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, IsRented: false }),
            });
            if (!res.ok) {
                const txt = await res.text();
                alert(`Error adding ${type}: ${txt || res.statusText}`);
                return;
            }
            setOpenModal(null);
            reset();
            navigate(`/${type}`);
        } catch (err: any) {
            console.error(err);
            alert(`Error adding ${type}: ${err.message}`);
        }
    };

    const Modal: React.FC<{
        type: "scooter" | "bike";
        onClose: () => void;
    }> = ({ type, onClose }) => (
        <div className="center">
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="Add-btn">Add {type === "scooter" ? "Scooter" : "Bike"}</h2>
                <form onSubmit={handleSubmit(data => submitItem(type, data))}>
                    <label className="form-label">
                        Brand
                                 <input {...register("Brand", { required: true })} />
                    </label>
                    <label>
                        Model
                        <input {...register("Model", { required: true })} />
                    </label>
                    <label>
                        Price (€ / day)
                        <input
                            type="number"
                            step="0.01"
                            {...register("Price", { valueAsNumber: true, min: 0, required: true })}
                        />
                    </label>
                    <label>
                        Description
                        <textarea {...register("Description", { required: true })} />
                    </label>
                    <label>
                        Image URL
                        <input {...register("ImageUrl", { required: true })} />
                    </label>
                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                        <button className="submit-btn" type="submit">Apply</button>
                        <button className="submit-btn" type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );

    return (
        <>
            <div className="add-buttons">
                <button
                    className="add-buttons__btn add-buttons__btn--scooter"
                    disabled={openModal !== null}
                    onClick={() => setOpenModal("scooter")}
                >
                    Add Scooter
                </button>
                <button
                    className="add-buttons__btn add-buttons__btn--bike"
                    disabled={openModal !== null}
                    onClick={() => setOpenModal("bike")}
                >
                    Add Bike
                </button>
            </div>


            {openModal === "scooter" && (
                <Modal type="scooter" onClose={() => setOpenModal(null)} />
            )}
            {openModal === "bike" && (
                <Modal type="bike" onClose={() => setOpenModal(null)} />
            )}
        </>
    );
};
