const http = require('http');
const port = process.env.PORT || 9001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello from DISAL\n');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
