import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import studentRoutes from "./routes/StudentRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env.ORIGIN || '*'
}));

app.use('/student', studentRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(process.env.PORT || 9001, () => {
  console.log(`Student Portal listening to port ${process.env.PORT || 9001}...`);
});