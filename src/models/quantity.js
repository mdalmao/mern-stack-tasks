const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuantitySchema = new Schema({
  id: { type: Number, required: true },
  value: { type: String, required: true },
 });

module.exports = mongoose.model('Quantity', QuantitySchema);
