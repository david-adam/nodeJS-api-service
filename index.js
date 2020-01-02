import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.json('Hello');
});

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Running server on port localhost:${port}`);
});
