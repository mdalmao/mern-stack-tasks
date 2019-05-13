const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnswerSchema = new Schema({
  id: { type: Number, required: true },
  id_participation: { type: Number, required: true },
  date: { type: Date, default: Date.now, required: true },
  point: { type: Number, min: 1, max: 12, required: true }
});

module.exports = mongoose.model('Answer', AnswerSchema);
