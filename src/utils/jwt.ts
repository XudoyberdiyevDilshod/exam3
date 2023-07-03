import jwt from 'jsonwebtoken';

const SECRET = 'Dilshod_X';

export default {
	sign: (payload: any) => jwt.sign(payload, SECRET),
	verify: (token: any) => jwt.verify(token, SECRET),
};
