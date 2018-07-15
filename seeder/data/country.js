const Country = require('../../models/country');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: Country,
	data: [
		{
			_id: ObjectId("5b3fa73f13591ee3884458a2"),
			name: 'Ireland',
			trigramme: 'IRL'
		},
		{
			_id: ObjectId("5b3fa73f13591ee3884458a3"),
			name: 'Northern Ireland',
			trigramme: 'NIR'
		}
	]
}