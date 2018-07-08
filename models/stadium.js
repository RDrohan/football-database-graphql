const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
  name: String,
  seatedCapacity: Number,
  totalCapacity: Number,
  cityId: String
});

module.exports = mongoose.model('Stadium', stadiumSchema, 'stadium');