import express from 'express';

const router = new express();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.listen(3001, () => {
    console.log('Server is running on port 3001');
});