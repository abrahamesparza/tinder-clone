const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const db = require('./db.js');
const Cards = require('./dbCards.js').Cards;
const cors = require('cors');

app.get('/', (req, res) => res.status(200).send('OK'));

app.use(express.json());
app.use(cors());

app.post('/tinder/cards', (req, res) => {
  let dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  })
});

app.get('/tinder/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})