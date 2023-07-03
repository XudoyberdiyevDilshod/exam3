import { Router } from 'express';
import CarController from './car.controller';

class CarRouter {
	public router = Router();
	private carController = new CarController();

	constructor() {
		this.Routers();
	}
	public Routers() {
		this.router.get('/car/model', this.carController.getAllCar);
		this.router.post('/car/model', this.carController.createCar);
		this.router.get('/car/model:Id', this.carController.getByIdCar);
		this.router.put('/car/model:Id', this.carController.updateCar);
		this.router.delete('/car/model:Id', this.carController.deleteCar);
	}
}

export default CarRouter;
