import {ScooterModel} from "../models";
import {CreateScooter, Scooter} from "../common/interfaces";

const scooterModel = new ScooterModel();
export class ScooterController {

    async getAllScooters    () {
        return await scooterModel.getAll();
    }
    async getScooterById(id: string) {
        return await scooterModel.getById(id);
    }
    async createScooter(scooter: CreateScooter) {
        return await scooterModel.create(scooter);
    }
    updateScooter(id: string, scooter: any) {
        return scooterModel.update(id, scooter);
    }
    async deleteScooter(id: string) {
        return await scooterModel.delete(id);
    }
    async rentScooter(id: string) {
        return await scooterModel.rent(id);
    }
    async unrentScooter(id: string) {
        return await scooterModel.unrent(id);
    }
}