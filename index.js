import express from 'express';

const app = express();

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
