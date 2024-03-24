import express from 'express';
import mongoose from 'mongoose';
import Router from './routes/route.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080
app.listen(port,() => {

    console.log(`listening on port ${port}`)
})
mongoose.connect('mongodb://localhost:27017/TaskGenius', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use('/', Router);
