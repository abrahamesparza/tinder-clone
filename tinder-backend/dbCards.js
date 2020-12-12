const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  imgUrl: String
});

const Cards = mongoose.model('Cards', cardSchema);

module.exports = {
  Cards
}