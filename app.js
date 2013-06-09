var server,
    ip = "127.0.0.1",
    port = 5000,
    http = require("http"),
    url = require("url");

var fs = require("fs"),
    filePath,
    encode = "utf8";

var path;

server = http.createServer(function (req, res) {
	
	path = url.parse(req.url);
	//filePath = path;
	console.log(path.pathname);

	fs.readFile(path.pathname, encode, function(err, file) {
	  if (err) {
	  	console.log("error");
	  	res.writeHead(200, {'Content-Type':'text/plain'});
	  	res.write("hello")
	  	res.end();
	  	return;
	  }

	res.writeHead(200, {'Content-Type':'text/application'});
	console.log(work);
	res.write(file);
	res.end();
    });

});

server.listen(port, ip);

console.log("Server running at http://" + ip + ":" + port);




