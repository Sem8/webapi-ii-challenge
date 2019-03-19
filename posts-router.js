const express = require('express');

const Posts = require('./data/db.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    } catch(err) {
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved.",
        });
    }
});

// router.get('/:id', async)

module.exports = router;