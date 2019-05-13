const mongoose = require('mongoose');
const { Schema } = mongoose;

const SurveyCommentsSchema = new Schema({
  id: { type: Number, required: true },
  id_survey: { type: Number, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('SurveyComments', SurveyCommentsSchema);
