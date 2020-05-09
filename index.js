const express = require('express');

const app = express();

app.get('/', (_req, res) => {
    res.send('Maratona Full Cycle 2.0');
});

app.listen(3000, _ => {
    console.log('Maratona Full Cycle 2.0');
});