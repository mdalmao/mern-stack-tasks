const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParticipationSchema = new Schema({
  id: { type: Number, required: true },
  id_realsample: { type: Number, required: true },
  until_date: { type: Date },
  confirmed: { type: Number, required: true },
  invitations_sent: { type: Number, required: true }
});

module.exports = mongoose.model('Participation', ParticipationSchema);
