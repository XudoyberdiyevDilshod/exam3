import { Request, Response } from 'express';
import adminService from './admin.service';

class AdminController {
	async getAllUser(req: Request, res: Response): Promise<void> {
		const users = await adminService.getAdmin();
		res.send(users);
	}
}

export default AdminController;
