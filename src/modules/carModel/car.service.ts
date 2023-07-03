import db from '../../database/pg';

class CarService {
	async getCar() {
		const cars = await db.fetchAll(' SELECT * FROM chevrolet');
		return cars;
	}
	async createCar(
		CH_car_name: string,
		Tanirovkasi: string,
		Motor: number,
		Year: number,
		Color: string,
		Distance: number,
		Gearbook: string,
		Deseription: string,
		Narxi: number,
		ModelImage: string,
	) {
		const cars = await db.fetchAll(
			`INSERT INTO chevrolet(car_model) VALUES ($1) RETURNING *`,
			[
				CH_car_name,
				Tanirovkasi,
				Motor,
				Year,
				Color,
				Distance,
				Gearbook,
				Deseription,
				Narxi,
				ModelImage,
			],
		);
		return cars;
	}
	async updateCar(Id: number, CH_car_name: string) {
		const cars = await db.fetchAll(
			`UPDATE
        chevrolet
        SET
        CH_car_name = $2
       WHERE id = $1
       RETURNING *`,
			[Id, CH_car_name],
		);
		return cars;
	}
	async deleteCar(Id: number) {
		const cars = await db.fetchAll(
			`DELETE FROM chevrolet WHERE id = $1 RETURNING *`,
			[Id],
		);
		return cars;
	}
	async getByIdCar(userId: number) {
		const [car] = await db.fetchAll(
			`SELECT * FROM chevrolet WHERE id = $1 RETURNING *`,
			[userId],
		);
		return car;
	}
}

export default new CarService();
