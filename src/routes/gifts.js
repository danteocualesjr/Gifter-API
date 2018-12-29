import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';
import authenticate from '../middlewares/authenticate';
import Gift from '../models/Gift';
import parseErrors from '../utils/parseErrors';

const router = express.Router();
router.use(authenticate);

router.get("/search", (req, res) => {
    res.json({
        gifts: [
            {
                giftId: 1,
                type: "book",
                title: "Don't Let the Pigeon Drive the Bus",
                author: "---",
            },
            {
                giftId: 2,
                type: "book",
                title: "This is Not My Hat",
                author: "---",
            },
            {
                giftId: 3,
                type: "book",
                title: "I Sold my Dad for 12 Goldfish",
                author: "Neil Gaiman",
            },                        
        ]
    })
});

export default router;