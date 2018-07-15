const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  name: String,
  countryId: String
});

module.exports = mongoose.model('Competition', competitionSchema, 'competition');