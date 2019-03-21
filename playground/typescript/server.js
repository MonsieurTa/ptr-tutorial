let http = require("http");
let url = require("url");

http.createServer((request, response) => {
	var page = url.parse(request.url).pathname;
	console.log(page);
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	if (page == '/')
		response.write('Bienvenue sur la page d\'acceuil.');
	else
		response.write('Il n\'y a rien a voir par ici.');
	response.end();
	console.log('Node.js server running on port 1337.');
}).listen(1337);
