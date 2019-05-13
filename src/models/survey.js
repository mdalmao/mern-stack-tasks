const mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveySchema = new Schema({
  id: { type: Number, required: true },
  title:{ type: String, required: true },
  description:{ type: String, required: true },
  launch_date: { type: Date, default: Date.now, required: true },
  due_date: { type: Date },
  point: { type: Number, min: 1, max: 12, required: true }
});

module.exports = mongoose.model('Survey', SurveySchema);
