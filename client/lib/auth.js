import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'bb6e8c8fabb6fa636c0a564c98a29674fc9655db8b471466a55b95731cabd697f7bb29c0577f9607892e20377be92f6e4ee49cfeefaacf7ec01de0ff0dc931e3';

export const hashPassword = async(password) => {
    return bcrypt.hash(password, 12);
};

export const verifyPassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

export const getTokenFromRequest = (authHeader) => {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
};