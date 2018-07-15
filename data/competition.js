const Competition = require('../models/competition');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
	name: Competition,
	data: [
        {
            _id : ObjectId('5b43bddaf0ed995f6a5e13a7'),
            name : 'FAI Cup',
            countryId : '5b3fa73f13591ee3884458a2'
        },
        {
            _id : ObjectId('5b43bddaf0ed995f6a5e13a8'),
            name : 'FAI President\'s Cup',
            countryId : '5b3fa73f13591ee3884458a2'
        },
        {
            _id : ObjectId('5b43bddaf0ed995f6a5e13a9'),
            name : 'FAI League Cup',
            countryId : '5b3fa73f13591ee3884458a2'
        },
        {
            _id : ObjectId('5b43bddaf0ed995f6a5e13aa'),
            name : 'FAI First Division',
            countryId : '5b3fa73f13591ee3884458a2'
        },
        {
            _id : ObjectId('5b43bddaf0ed995f6a5e13ab'),
            name : 'FAI Premier Division',
            countryId : '5b3fa73f13591ee3884458a2'
        }
	]
}