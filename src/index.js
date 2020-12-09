const app = require('express')();
const http = require('http').Server(app).listen(3002);

const getAllUsers = require('./routes/getAllUsers');
const getAllPosts = require('./routes/getAllPosts');

app.get('/users/all', getAllUsers);
app.get('/posts/all', getAllPosts);
