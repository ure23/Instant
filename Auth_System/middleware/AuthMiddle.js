import jwt from 'jsonwebtoken';
import * as UserModels from '../models/UserModels.js';

const checkToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: 'You do not have permission to access the app.'
        });
    }

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, process.env.SECRET);

        const [user] = await UserModels.getUser(id);

        req.user = user; // attach user data

        next();

    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Request is unauthorized'
        });
    }
};

export default checkToken;