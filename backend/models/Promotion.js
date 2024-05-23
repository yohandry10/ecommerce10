const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
  description: { type: String },
  validFrom: { type: Date },
  validTo: { type: Date }
});

module.exports = mongoose.model('Promotion', promotionSchema);
