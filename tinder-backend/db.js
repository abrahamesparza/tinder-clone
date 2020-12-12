const mongoose = require('mongoose');
const connectionUrl = `mongodb+srv://admin:cpvgl82BtqJd6Z7c@cluster0.hevr4.mongodb.net/tinderdb?retryWrites=true&w=majority`

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('Connected to MongoDB'));

