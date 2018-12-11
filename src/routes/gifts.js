import express from 'express';

const router = express.Router();

router.get("/search", (req, res) => {
    res.json({
        gifts: [
            {
                giftId: 1,
                type: "book",
                title: "Don't Let the Pigeon Drive the Bus",
                author: "---",
            },
        ]
    })
});

export default router;