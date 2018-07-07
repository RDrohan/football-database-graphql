const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: String,
  trigramme: String
});

module.exports = mongoose.model('Country', countrySchema, 'country');