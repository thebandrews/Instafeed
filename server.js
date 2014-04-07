var connect = require('connect'), http = require('http');
var lessMiddleware = require('less-middleware');
var PORT = process.env.port || 1337;

var app = connect()
    .use(lessMiddleware({ src: __dirname + '/public', }))
    .use(connect.static('public'));

http.createServer(app).listen(PORT);
console.log('Server started on http://localhost:' + PORT);
