const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('hey');
});

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});
