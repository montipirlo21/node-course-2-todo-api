var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose.connect('mongodb://montipirlo21:Dasilu.21@ds013559.mlab.com:13559/stark-temple-70258');

module.exports = {
  mongoose
}
