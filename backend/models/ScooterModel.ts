import {Pool, RowDataPacket} from "mysql2/promise";
import {Database} from "./Database";
import {CreateScooter, Scooter} from "../common/interfaces";

export class ScooterModel {
    db: Pool;

    constructor() {
        this.db = new Database().conn;
    }
    async getAll() {
        const [rows] = await this.db.query("SELECT * FROM scooters");
        return rows;
    }
    async getById(id: string) {
        const [result] = await this.db.execute(`SELECT * FROM scooters WHERE id = ?`, [id]);
        return result;
    }
    async create(scooter: CreateScooter) {
        const [result] = await this.db.execute(`INSERT INTO scooters(Brand, Model, Price, IsRented, Description, ImageUrl ) VALUES (?, ?, ?, ?, ?, ?)`, [
            scooter.Brand, scooter.Model, scooter.Price, scooter.IsRented, scooter.Description, scooter.ImageUrl]);
        return `Scooter is created!`;
    }
    async update(id: string, scooter: any) {
       const fields = Object.keys(scooter).map(key => `${key} = ?`).join(',');
       const values = Object.values(scooter);
       values.push(id);
       const result = await this.db.execute(`UPDATE scooters SET ${fields} WHERE id = ?`, values)
        return `Updated scooter with id =${id}.`
    }
    async delete(id: string) {
        const [rows] = await this.db.execute(`DELETE FROM scooters WHERE id = ?`, [id]);
        return `Scooter is deleted!`;
    }
    async rent(id: string) {
        const [rows] = await this.db.execute(`UPDATE scooters SET IsRented = ? WHERE id = ?`, [true, id]);
        return `Scooter is rented!`;
    }
    async unrent(id: string) {
        const [rows] = await this.db.execute(`UPDATE scooters SET IsRented = ? WHERE id = ?`, [false, id]);
        return `Scooter is unrented!`;
    }
}