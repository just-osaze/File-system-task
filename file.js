const https = require('https');

jsonFile = https.get('https://jsonplaceholder.typicode.com/users', res => {
	let data = "";
	res.on("data", d => {
		data += d
	});
	res.on("end", () => {
		console.log(data)
	});
});

let fs = require('fs');

fs.write(200, './result/posts.json', jsonFile, (err) => {
	// if any error, throw the errow
	if (err) {
		console.log({ err });
	};
	console.log("File Successfully created");
})