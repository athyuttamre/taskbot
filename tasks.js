var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  team: String,
  channel: String,
  username: String,

  createdAt: Number,
  createdBy: String,
  active: Boolean,

  text: String
});

var Tasks = mongoose.model('Task', taskSchema);

module.exports = Tasks;