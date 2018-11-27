const Country = require('../models/country');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: Country,
	data: [
		{_id: ObjectId('5b3fa73f13591ee3884458a2'), name: 'Ireland', trigramme: 'IRL'},
		{_id: ObjectId('5b3fa73f13591ee3884458a3'), name: 'Northern Ireland', trigramme: 'NIR'},
		{_id: ObjectId('5bfd8f0149b8d59b04cef75f'), name: 'Armenia', trigramme: 'ARM'}
	]
}