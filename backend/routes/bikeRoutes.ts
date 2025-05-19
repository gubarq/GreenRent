import {Request, Response, Router} from "express";
import {BikeController} from "../controllers";

const bikeController = new BikeController();
export const bikeRoutes = Router();

bikeRoutes.get("/bike", async (req: Request, res: Response) => {
    res.send(await bikeController.getAllBikes());
})
bikeRoutes.get("/bike/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.getBikeById(id));
})
bikeRoutes.post("/bike", async (req: Request, res: Response) => {
    const data = req.body;
    res.send(await bikeController.createBike(data));
})
bikeRoutes.put("/bike/:id/edit", (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    res.send(bikeController.updateBike(id, data));
})
bikeRoutes.delete("/bike/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.deleteBike(id));
})
bikeRoutes.patch("/bike/:id/rent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.rentBike(id));
})
bikeRoutes.patch("/bike/:id/unrent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.unrentBike(id));
})