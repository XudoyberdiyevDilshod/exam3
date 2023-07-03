import { Request, Response } from 'express';
import carModel from './car.service';

class CarController {
	async getAllCar(req: Request, res: Response): Promise<void> {
		const cars = await carModel.getCar();
		res.send(cars);
	}
	async createCar(req: Request, res: Response): Promise<void> {
		const {
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
		} = req.body;
		const cars = await carModel.createCar(
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
		);
		res.status(201).send(cars);
	}

	async updateCar(req: Request, res: Response): Promise<void> {
		const { CH_car_name } = req.body;
		const { Id } = req.params;
		const cars = await carModel.updateCar(+Id, CH_car_name);
		res.status(201).send(cars);
	}
	async deleteCar(req: Request, res: Response): Promise<void> {
		const { Id } = req.params;
		const cars = await carModel.deleteCar(+Id);
		res.status(200).send(cars);
	}

	async getByIdCar(req: Request, res: Response): Promise<void> {
		const { Id } = req.params;
		const users = await carModel.getByIdCar(+Id);
		res.status(200).send(users);
	}
}

export default CarController;
