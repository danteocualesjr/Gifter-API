import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    const { credentrials } = req.body;
});

export default router;