const express = require('express');
const { setupProxy } = require('@reshuffle/local-proxy');
const app = express();
setupProxy(__dirname)(app);
app.listen(3000);

/**
 * YOUR CODE SHOULD NOT GO HERE! please edit ./backend/_handler.js instead.
 * 
 */
