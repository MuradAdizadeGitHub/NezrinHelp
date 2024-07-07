import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
import { usersRouter } from './Routes/UsersRoute.js';
import { authRouter } from './Routes/AuthRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users',usersRouter);
app.use('/',authRouter)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


















