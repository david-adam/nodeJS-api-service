import express from 'express';
import cors from 'cors';

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

const messages = [
  {
    text: 'Some messages',
    owner: 'David'
  },
  {
    text: 'the seconde messages',
    owner: 'Jim'
  }
];

app.get('/', (_req, res) => {
  res.json('Hello');
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Running server on port localhost:${port}`);
});
