const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ClientSchema = new Schema({
client: {
  type: String,
  lowercase: true,
  unique: true,
  required: true
},
apis: {type: [String]},
},
{
  timestamps: true,
});

module.exports = mongoose.model('Client', ClientSchema);
