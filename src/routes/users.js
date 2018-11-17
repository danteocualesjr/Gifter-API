import express from 'express';
import User from '../models/User';
import parseErrors from '../utils/parseErrors';
import { sendConfirmationEmail } from '../mailer';

const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body.user;
    const user = new User ({ email });
    user.setPassword(password);
    user.setConfirmationToken();
    user
        .save()
        .then(userRecord => {
            sendConfirmationEmail(userRecord);
            res.json({ user: userRecord.toAuthJSON() })})
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.post('/confirmation', (req, res) => {
    const token = req.body.token;
    User.findOneAndUpdate({ confirmationToken: token }, { confirmationToken: "", })
})

export default router;