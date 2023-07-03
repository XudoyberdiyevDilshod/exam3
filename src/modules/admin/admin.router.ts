import { Router } from 'express';
import AdminController from './admin.controller';

class UserRouter {
	public router = Router();
	private AdminController = new AdminController();

	constructor() {
		this.Routers();
	}
	public Routers() {
		this.router.get('/admin', this.AdminController.getAllUser);
	}
}

export default UserRouter;
