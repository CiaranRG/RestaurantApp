import jwt from 'jsonwebtoken';

const payload = { userId: 123 };
const secret = 'your-secret-key';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });
