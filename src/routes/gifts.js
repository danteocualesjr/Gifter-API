import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';
import Gift from '../models/Gift';
import parseErrors from '../utils/parseErrors';

const router = express.Router();
router.use(authenticate);

router.get("/", (req, res) => {
    Book.find({ userId: req.currentUser._id }).then(books => releaseEvents.json({ gifts }));
})

router.post("/", (req, res) => {
    Book.create({ ...req.body.gift, userId: req.currentUser._id })
        .then(book => res.json({ book }))
        .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.get("/search", (req, res) => {

});

export default router;