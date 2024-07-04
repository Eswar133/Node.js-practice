import http from 'http'; // Using 'import' for ES Modules
import { upperCase } from 'upper-case'; // Assuming 'upper-case' exports 'upperCase'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(upperCase("Hello World!"));
  res.end();
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
