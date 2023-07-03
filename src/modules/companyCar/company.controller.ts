import { Request, Response } from 'express';
import carService from './company.service';

class CompanyController {
	async getAllCar(req: Request, res: Response): Promise<void> {
		const cars = await carService.getCar();
		res.send(cars);
	}
	async createCarModel(req: Request, res: Response): Promise<void> {
		const { car_model } = req.body;
		const users = await carService.createCar(car_model);
		res.status(201).send(users);
	}

	async updateCarModel(req: Request, res: Response): Promise<void> {
		const { car_model } = req.body;
		const { Id } = req.params;
		const users = await carService.updateCar(+Id, car_model);
		res.status(201).send(users);
	}
	async deleteCarModel(req: Request, res: Response): Promise<void> {
		const { Id } = req.params;
		const users = await carService.deleteCar(+Id);
		res.status(200).send(users);
	}
}

export default CompanyController;
