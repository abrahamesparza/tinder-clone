const mongoose = require('mongoose');
let connectionUrl = require('./mongoUrl.js').connectionUrl;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('Connected to MongoDB'));

