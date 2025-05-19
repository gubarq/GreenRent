import {BikeModel} from "../models";
import {CreateBike, Bike} from "../common/interfaces";

const bikeModel = new BikeModel();
export class BikeController {

    async getAllBikes() {
        return await bikeModel.getAll();
    }
    async getBikeById(id: string) {
        return await bikeModel.getById(id);
    }
    async createBike(bike: CreateBike) {
        return await bikeModel.create(bike);
    }
    updateBike(id: string, bike: any) {
        return bikeModel.update(id, bike);
    }
    async deleteBike(id: string) {
        return await bikeModel.delete(id);
    }
    async rentBike(id: string) {
        return await bikeModel.rent(id);
    }
    async unrentBike(id: string) {
        return await bikeModel.unrent(id);
    }
}