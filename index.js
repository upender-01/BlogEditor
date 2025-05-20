import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import blogRoutes from './routes/blogs.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.log(err));