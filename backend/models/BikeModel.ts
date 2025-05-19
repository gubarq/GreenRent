import {Pool, RowDataPacket} from "mysql2/promise";
import {Database} from "./Database";
import {CreateBike, Bike} from "../common/interfaces";

export class BikeModel {
    db: Pool;

    constructor() {
        this.db = new Database().conn;
    }
    async getAll() {
        const [rows] = await this.db.query("SELECT * FROM bikes");
        return rows;
    }
    async getById(id: string) {
        const [result] = await this.db.execute(`SELECT * FROM bikes WHERE id = ?`, [id]);
        return result;
    }
    async create(bike: CreateBike) {
        const [result] = await this.db.execute(`INSERT INTO bikes(Brand, Model, Price, IsRented, Description, ImageUrl ) VALUES (?, ?, ?, ?, ?, ?)`, [
            bike.Brand, bike.Model, bike.Price, bike.IsRented, bike.Description, bike.ImageUrl]);
        return `Bike is created!`;
    }
    async update(id: string, bike: any) {
       const fields = Object.keys(bike).map(key => `${key} = ?`).join(',');
       const values = Object.values(bike);
       values.push(id);
       const result = await this.db.execute(`UPDATE bikes SET ${fields} WHERE id = ?`, values)
        return `Updated bike with id =${id}.`
    }
    async delete(id: string) {
        const [rows] = await this.db.execute(`DELETE FROM bikes WHERE id = ?`, [id]);
        return `Bike is deleted!`;
    }
    async rent(id: string) {
        const [rows] = await this.db.execute(`UPDATE bikes SET IsRented = ? WHERE id = ?`, [true, id]);
        return `Bike is rented!`;
    }
    async unrent(id: string) {
        const [rows] = await this.db.execute(`UPDATE bikes SET IsRented = ? WHERE id = ?`, [false, id]);
        return `Bike is unrented!`;
    }
}