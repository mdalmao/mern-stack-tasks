const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
  id: { type: Number, required: true },
  email: { type: String, required: true },
  state: { type: Boolean, required: true}
});

module.exports = mongoose.model('Person', PersonSchema);
