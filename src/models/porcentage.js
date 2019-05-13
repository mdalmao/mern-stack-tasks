const mongoose = require('mongoose');
const { Schema } = mongoose;

const PorcentageSchema = new Schema({
  id: { type: Number, required: true },
  value: { type: Number, min: 1, max: 12, required: true }
});

module.exports = mongoose.model('Porcentage', PorcentageSchema);
