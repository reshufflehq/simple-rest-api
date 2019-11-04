const express = require('express');
const { setupProxy } = require('@reshuffle/local-proxy');
const app = express();
setupProxy(__dirname)(app);
app.listen(3000);
