import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './db/connection.js';
import schoolRoutes from './routes/schools.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
