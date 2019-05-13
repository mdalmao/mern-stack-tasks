const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema({
  id: { type: Number, required: true },
  value: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Option', OptionSchema);
