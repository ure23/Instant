import * as UserControllers from '../controllers/UserControllers.js';
import express from 'express';

const UserRoutes = express.Router();

UserRoutes.post('/new', UserControllers.register)
UserRoutes.post('/login', UserControllers.login)

export default UserRoutes;