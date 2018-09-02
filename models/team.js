const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  yearFounded: Number,
  stadiumId: String,
  leagueId: String,
  winnerId: String
});

module.exports = mongoose.model('Team', teamSchema, 'team');