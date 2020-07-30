import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { mongoURI } from './config/database';
import message from './routes/messages';
import enrollment from './routes/enrollment';

const whitelist = [
  'http://example1.com',
  'http://example2.com',
  'http://localhost:4200'
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const corsHandler = cors(corsOptions);

const app = express();

app.use(corsHandler);
app.options('*', corsHandler);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

app.get('/', (_req, res) => {
  res.json('Hello');
});

app.use('/api', message);
app.use('/enrollment', enrollment);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Running server on port localhost:${port}`);
});
