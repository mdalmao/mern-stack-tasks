const mongoose = require('mongoose');
const { Schema } = mongoose;

const PollisterSchema = new Schema({
  id: { type: Number, required: true },
  id_survey: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: Boolean, required: true},
  url_site: { type: String, required: true }
});

module.exports = mongoose.model('Pollister', PollisterSchema);
