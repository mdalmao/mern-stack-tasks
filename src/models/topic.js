const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Topic', TopicSchema);
