import db from '../../database/pg';

class AdminService {
	async getAdmin() {
		const users = await db.fetchAll(' SELECT * FROM admin');
		return users;
	}
}

export default new AdminService();
