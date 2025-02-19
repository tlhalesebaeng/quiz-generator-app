const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const usersRoute = require('./routes/userRoutes');

const app = express();

dotenv.config({ path: './config.env' });

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //middleware to log some request data
}
app.use(express.json()); //middleware to add the incoming body data to the request object

app.use('/quiz/app/api/v1/users', usersRoute);

module.exports = app;
