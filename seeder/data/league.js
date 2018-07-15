const League = require('../../models/league');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: League,
	data: [
		{
			_id: ObjectId('5b3faac513591ee3884458a4'),
			name: 'SSE Airtricity League Premier Division',
			level: 1.0,
			countryId: '5b3fa73f13591ee3884458a2'
		},
		{
			_id: ObjectId('5b3faac513591ee3884458a5'),
			name: 'SSE Airtricity League First Division',
			level: 2.0,
			countryId: '5b3fa73f13591ee3884458a2'
		},
		{
			_id: ObjectId('5b3faac513591ee3884458a6'),
			name: 'Danske Bank Premiership',
			level: 1.0,
			countryId: '5b3fa73f13591ee3884458a3'
		},
		{
			_id: ObjectId('5b3faac513591ee3884458a7'),
			name: 'NIFL Bluefin Sport Championship',
			level: 2.0,
			countryId: '5b3fa73f13591ee3884458a3'
		},
		{
			_id: ObjectId('5b3faac513591ee3884458a8'),
			name: 'NIFL Premier Intermediate League',
			level: 3.0,
			countryId: '5b3fa73f13591ee3884458a3'
		}
	]
}