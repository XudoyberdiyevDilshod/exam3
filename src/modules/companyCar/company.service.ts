import db from '../../database/pg';

class CompanyService {
	async getCar() {
		const cars = await db.fetchAll('SELECT * FROM cars');
		return cars;
	}
	async createCar(car_model: string) {
		const cars = await db.fetchAll(
			`INSERT INTO cars(car_model) VALUES ($1) RETURNING *`,
			[car_model],
		);
		return cars;
	}
	async updateCar(Id: number, car_model: string) {
		const cars = await db.fetchAll(
			`UPDATE
        cars
        SET
        car_model = $2
       WHERE id = $1
       RETURNING *`,
			[Id, car_model],
		);
		return cars;
	}
	async deleteCar(Id: number) {
		const cars = await db.fetchAll(
			`DELETE FROM cars WHERE id = $1 RETURNING *`,
			[Id],
		);
		return cars;
	}
}

export default new CompanyService();
