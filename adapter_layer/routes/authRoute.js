import * as AuthControllers from '../controllers/authController.js';
import express from 'express';

const authRoutes = express.Router();

authRoutes.post('/new', AuthControllers.registerStudent)
authRoutes.get("/profile/:id", AuthControllers.getStudentProfile)
export default authRoutes;