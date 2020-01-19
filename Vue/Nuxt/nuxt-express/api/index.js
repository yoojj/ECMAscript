const express = require('express');
const app = express();


// routes
const index = require('./routes/index');
const user = require('./routes/user');

app.use(index);
app.use(user);



module.exports = {
    path: '/api',
    handler: app
}
