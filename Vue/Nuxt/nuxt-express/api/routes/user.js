const express = require('express');
const app = express();



app.get('/user', (req, res, next) => {
    res.send('user');
});



module.exports = app;
