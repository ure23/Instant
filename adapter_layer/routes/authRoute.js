import * as AuthControllers from '../controllers/authController.js';
import express from 'express';

const authRoutes = express.Router();

authRoutes.post('/new', AuthControllers.registerStudent)

export default authRoutes;