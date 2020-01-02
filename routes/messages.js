import express from 'express';
import { Messages } from '../models/message';

const router = express.Router();

router.get('/messages', (_req, res) => {
  Messages.find()
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

router.post('/messages', (req, res) => {
  const newMessage = new Messages({
    text: req.body.text,
    owner: req.body.owner
  });

  newMessage
    .save()
    .then(() => {
      res.status(201);
      res.json('OK');
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json('Error save data to database.');
    });
});

export default router;
