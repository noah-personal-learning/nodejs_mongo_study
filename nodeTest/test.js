var client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/nodejs', function (err, db) {

	if (err != null)
		console.log("에러 내용 : ", +err);

		var cursor = db.collection('users').find({});

		cursor.each(function(err,doc){
			if(err != null){
				console.log(doc);
			}
		})
		db.close();

	// db.users.save({
	// 	name: "two",
	// 	age: 24,
	// 	married: false,
	// 	comment: "Hello, world",
	// 	createAt: new Date()
	// });

	//console.log(data);
})

