const express = require('express');

const app = express();

app.use(express.json()); //middleware to add the incoming body data to the request object

app.get('/quiz/app/api/v1/users', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'all users',
    });
});

app.get('/quiz/app/api/v1/users/:id', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: `get user ${req.params.id}`,
    });
});

app.post('/quiz/app/api/v1/users', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: req.body,
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
