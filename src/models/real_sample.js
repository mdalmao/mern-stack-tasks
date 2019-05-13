const mongoose = require('mongoose');
const { Schema } = mongoose;

const RealSampleSchema = new Schema({
  id: { type: Number, required: true },
  id_survey: { type: Number, required: true },
  total_remain: { type: Number, required: true },
  total_confirmed: { type: Number, required: true },
  total_sent: { type: Number, required: true }
});

module.exports = mongoose.model('RealSample', RealSampleSchema);
