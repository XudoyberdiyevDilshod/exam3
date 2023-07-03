import { Router } from 'express';

import AdminRouter from '../modules/admin/admin.router';
import CarRouter from '../modules/carModel/car.router';
import CompanyRouter from '../modules/companyCar/company.router';

const router = Router();

const adminRouter = new AdminRouter();
const carRouter = new CarRouter();
const companyRouter = new CompanyRouter();

router.use('/', adminRouter.router);
router.use('/', carRouter.router);
router.use('/', companyRouter.router);

export default router;
