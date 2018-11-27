const League = require('../models/league');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: League,
	data: [
		{ _id: ObjectId('5b3faac513591ee3884458a4'), name: 'SSE Airtricity League Premier Division', level: 1, countryId: '5b3fa73f13591ee3884458a2'},
		{ _id: ObjectId('5b3faac513591ee3884458a5'), name: 'SSE Airtricity League First Division', level: 2, countryId: '5b3fa73f13591ee3884458a2'},
		{ _id: ObjectId('5b3faac513591ee3884458a6'), name: 'Danske Bank Premiership', level: 1, countryId: '5b3fa73f13591ee3884458a3'},
		{ _id: ObjectId('5b3faac513591ee3884458a7'), name: 'NIFL Bluefin Sport Championship', level: 2, countryId: '5b3fa73f13591ee3884458a3'},
		{ _id: ObjectId('5b3faac513591ee3884458a8'), name: 'NIFL Premier Intermediate League', level: 3, countryId: '5b3fa73f13591ee3884458a3'},
		{ _id: ObjectId('5bfd8fb449b8d59b04cef7ae'), name: 'Armenian Premier League', level: 1, countryId: '5bfd8f0149b8d59b04cef75f'},
		{ _id: ObjectId('5bfd8fe949b8d59b04cef7b8'), name: 'Armenian First League', level: 2, countryId: '5bfd8f0149b8d59b04cef75f'}
	]
}