import express from "express";
import * as StudentController from "../controllers/StudentController.js";

const router = express.Router();

// no login, no middleware
router.get("/profile/:id", StudentController.getStudentProfile);

export default router;