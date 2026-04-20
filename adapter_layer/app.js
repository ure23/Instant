import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// logger (should be early)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/auth', authRoutes);

// start server
app.listen(process.env.PORT || 9000, () => {
  console.log(`listening to port ${process.env.PORT || 9000}...`);
});