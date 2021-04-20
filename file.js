const https = require('https');

const fs = require('fs');

https.get('https://jsonplaceholder.typicode.com/users', res => {
	let file = "";
	res.on("data", data => {
		file += data;
	})
	res.on("end", () => fs.writeFile('./result/posts.json', file, function (err) {
		// if any error, throw the errow
		if (err) {
			console.log({ err });
		};
		console.log("File Successfully created");
	}));
});



