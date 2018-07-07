const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: String,
  level: Number,
  countryId: String
});

module.exports = mongoose.model('League', leagueSchema, 'league');