import { NextFunction, Request, Response } from 'express';
import jwt from '../utils/jwt.js';

export default (req: Request, res: Response, next: NextFunction) => {
	try {
		const { token } = req.headers;
		if (!token) {
			throw new Error('token required');
		}
		next();
	} catch (error) {
		return next(error);
	}
};
