//	App.JS
//
//	Logs data from tracker to a MongoDB
//

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {		// Server Function


	//
	//	get the URL & Query submitted

	var url	= require("url").parse(req.url,true,false);	
	
	//
	//	Split the URL into usable parts

	var x = url.query;					// 	The performance data sent to us
	var y = url.pathname.substring(1);	//	The path to the image file
	var z = y.split("/").pop();			//	Just the filename

	console.log(y, z, x);				// 	Log it all to the console so we can check it



	//
	//	Begin writing headers back to the user, send the image

	res.writeHead(200, {'Content-Type': 'image/png'});

	var fileStream = fs.createReadStream(y);	//	File to stream, we're getting this from the pathname, Should it be hardcoded so the user can't choose their file?
	
	fileStream.on('data', function (data) {
	    res.write(data);						// 	Start sending image
	});
	fileStream.on('end', function() {
	    res.end();								//	All done, close up the stream
	    return;
	});



	//
	//	Do something with the data submitted here!
	//
	//
 
});

server.listen(8000);