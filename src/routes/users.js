import React from 'react';

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body.user;
    const user = new User ({ email });
})

export default router;