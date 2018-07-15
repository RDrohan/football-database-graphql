const insertCollection = async (collection) => {
	let Collection = collection.name;

	return await Collection.insertMany(collection.data)
		.then((mongooseDocuments) => {
			return new Promise(resolve => {
				resolve(mongooseDocuments);
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const mongoose = require('mongoose');

const data = [
	insertCollection(require('./data/country'))
];

mongoose.connect('mongodb://localhost:27017/football-database-test', { useNewUrlParser: true });

Promise.all(data).then(() => {
	console.log('Database seeded');
	mongoose.disconnect();
});

//mongoose.disconnect();