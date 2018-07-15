const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const winnerSchema = new Schema({
  competitionId: String,
  teamId: String,
  season: String
});

module.exports = mongoose.model('Winner', winnerSchema, 'winner');