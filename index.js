
var http = require('http');
var os = require('os');
var port = 8080;

http.createServer( (req, res) => {
  console.log('Requested: ' + req.url);
  res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8' });
  res.write('<h1>docker 예제1</h1>');
  res.write('<h2>Hello 지유야 항상 건강하고 행복하자~</h2>');
  res.end();
}).listen(port, () => {
  console.log('Listen ... ' + os.hostname()+':'+port);
});

