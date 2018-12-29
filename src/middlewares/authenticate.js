import jwt from 'jsonwebtoken';
import User from '../models/User';

export default (req. res, next) => {
    const header = req.headers.authorization;
    let token;

    if (header) token = header.split("")[1];

    if (token) {
        
    }
}