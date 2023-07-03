import { Router } from 'express';
import CompanyController from './company.controller';

class CompanyRouter {
	public router = Router();
	private companyController = new CompanyController();

	constructor() {
		this.Routers();
	}
	public Routers() {
		this.router.get('/company', this.companyController.getAllCar);
		this.router.post('/company', this.companyController.createCarModel);
		this.router.put('/company:Id', this.companyController.updateCarModel);
		this.router.delete('/company:Id', this.companyController.deleteCarModel);
	}
}

export default CompanyRouter;
