const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.use(express.static('Public'));

app.use('/roulette', (req, res) => {
    res.sendFile(__dirname + '/Public/Roulette/Roulette.html');
});

app.use('/slots', (req, res) => {
    res.sendFile(__dirname + '/Public/Slots/Slots.html');
});

app.use('/blackjack', (req, res) => {
    res.sendFile(__dirname + '/Public/BlackJack/BlackJack.html');
});

app.use('', (req, res) => {
    res.sendFile(__dirname + '/Public/index.html');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});