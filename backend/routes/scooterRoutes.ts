import {Request, Response, Router} from "express";
import {ScooterController} from "../controllers";

const scooterController = new ScooterController();
export const scooterRoutes = Router();

scooterRoutes.get("/scooter", async (req: Request, res: Response) => {
    res.send(await scooterController.getAllScooters());
})
scooterRoutes.get("/scooter/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.getScooterById(id));
})
scooterRoutes.post("/scooter", async (req: Request, res: Response) => {
    const data = req.body;
    res.send(await scooterController.createScooter(data));
})
scooterRoutes.put("/scooter/:id/edit", (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    res.send(scooterController.updateScooter(id, data));
})
scooterRoutes.delete("/scooter/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.deleteScooter(id));
})
scooterRoutes.patch("/scooter/:id/rent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.rentScooter(id));
})
scooterRoutes.patch("/scooter/:id/unrent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await scooterController.unrentScooter(id));
})