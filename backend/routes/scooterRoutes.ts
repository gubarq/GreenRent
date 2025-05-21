// backend/routes/scooterRoutes.ts
import { Request, Response, Router } from "express";
import { ScooterController } from "../controllers";
import {bikeRoutes} from "./bikeRoutes";

const scooterController = new ScooterController();
export const scooterRoutes = Router();

scooterRoutes.get("/scooter", async (_req: Request, res: Response) => {
    res.send(await scooterController.getAllScooters());
});

scooterRoutes.get("/scooter/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.getScooterById(id));
});

// ← Fixed POST handler
scooterRoutes.post("/scooter", async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const message = await scooterController.createScooter(data);
        res.status(201).send({ message });
    } catch (err) {
        console.error("Error in POST /scooter:", err);
        res.status(500).send(String(err));
    }
});
scooterRoutes.put("/admin/:id/EditScooter", async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    await scooterController.updateScooter(id, data);
    res.status(200).json({ message: `Scooter with ID ${id} updated.` });
})

scooterRoutes.delete("/scooter/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.deleteScooter(id));
});

scooterRoutes.patch("/scooter/:id/rent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.rentScooter(id));
});

scooterRoutes.patch("/scooter/:id/unrent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.unrentScooter(id));
});
