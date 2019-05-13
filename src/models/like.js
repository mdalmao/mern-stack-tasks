const mongoose = require('mongoose');
const { Schema } = mongoose;

const LikeSchema = new Schema({
  id: { type: Number, required: true },
  id_survey: { type: Number, required: true },
  id_person: { type: Number, required: true },
});

module.exports = mongoose.model('Like', LikeSchema);
