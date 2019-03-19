const express = require('express');

const postsRouter = require('./posts-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    Navigate to /api/posts on the URL to get all the blog posts`);
});

server.use('/api/posts', postsRouter);


module.exports = server;