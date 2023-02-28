import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js'
import categoriesRoutes from './routes/categories.js'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({ origin: true }));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/posts', postRoutes);
app.use('/categories', categoriesRoutes )
app.use('/users', usersRoutes)
app.use('/auth', authRoutes)



mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch((err) => {
  console.log(err);
})
