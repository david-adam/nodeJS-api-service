import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
      res.status(200);
      res.json({data: "Hello from enrollment"});
});

router.post('/add', (req, res) => {
    console.log(req.body);
    res.status(200).json({data: "Date received."})
});

export default router;