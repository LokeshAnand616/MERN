require('dotenv').config();
var express = require('express');
var path = require('path');
var logger = require('morgan');
var { MongoClient } = require('mongodb');
var debug = require('debug')('app');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  try {
    await client.connect();
    app.locals.db = client.db('mydatabase'); 
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
}
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    debug('HTTP server closed');
  });
});

module.exports = app;
