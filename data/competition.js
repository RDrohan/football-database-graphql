const Competition = require('../models/competition');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: Competition,
	data: [
        { _id : ObjectId('5b43bddaf0ed995f6a5e13a7'), name: 'FAI Cup', countryId: '5b3fa73f13591ee3884458a2' },
        { _id : ObjectId('5b43bddaf0ed995f6a5e13a8'), name: 'FAI President\'s Cup', countryId: '5b3fa73f13591ee3884458a2' },
        { _id : ObjectId('5b43bddaf0ed995f6a5e13a9'), name: 'FAI League Cup', countryId: '5b3fa73f13591ee3884458a2' },
        { _id : ObjectId('5b43bddaf0ed995f6a5e13aa'), name: 'FAI First Division', countryId: '5b3fa73f13591ee3884458a2' },
        { _id : ObjectId('5b43bddaf0ed995f6a5e13ab'), name: 'FAI Premier Division', countryId: '5b3fa73f13591ee3884458a2' },
        { _id : ObjectId('5bfc6c6e49b8d59b04cef2fa'), name: 'Danske Bank Premiership', countryId: '5b3fa73f13591ee3884458a3' },
        { _id : ObjectId('5bfc6ca449b8d59b04cef306'), name: 'NIFL Bluefin Sport Championship', countryId: '5b3fa73f13591ee3884458a3' },
        { _id : ObjectId('5bfc6cbe49b8d59b04cef30d'), name: 'NIFL Premier Intermediate League', countryId: '5b3fa73f13591ee3884458a3' },
        { _id : ObjectId('5bfc6ce249b8d59b04cef314'), name: 'Tennant\'s Irish Cup', countryId: '5b3fa73f13591ee3884458a3' },
        { _id : ObjectId('5bfc6d1049b8d59b04cef31c'), name: 'BetMcClean League Cup', countryId: '5b3fa73f13591ee3884458a3' }
	]
}