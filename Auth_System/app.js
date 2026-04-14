import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// logger (should be early)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// CORS
let corsOptions = {
  origin: process.env.ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));

// routes
app.use('/user', userRoutes);

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`listening to port ${process.env.PORT || 3000}...`);
});